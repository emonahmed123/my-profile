

ARG NODE_VERSION=22

# ── base: Node + the pnpm version pinned in package.json ──────────────
FROM node:${NODE_VERSION}-bookworm-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install -g pnpm@11.9.0
WORKDIR /app

# ── deps: install from the lockfile only, so this layer caches well ───
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ── dev: `next dev` with hot reload — run via compose.dev.yaml ────────
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
# 0.0.0.0 so the dev server is reachable from outside the container
CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]

# ── builder: compile the app ──────────────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ── runner: just the standalone server, static assets and public/ ─────
FROM node:${NODE_VERSION}-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# run as an unprivileged user
RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
# standalone/ holds server.js plus the traced node_modules it needs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# server.js serves these itself once they sit next to it
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
