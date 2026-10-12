"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface CopyCommandProps {
  command: string;
  className?: string;
}

/** Shell command chip with a copy-to-clipboard button — for dark surfaces. */
export function CopyCommand({ command, className }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border border-canvas-soft/10 bg-canvas-soft/5 py-1 pl-3 pr-1",
        className,
      )}
    >
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-caption text-canvas-soft/80">
        <span aria-hidden className="select-none text-primary">
          ${" "}
        </span>
        {command}
      </code>
      <button
        type="button"
        onClick={() =>
          navigator.clipboard.writeText(command).then(() => setCopied(true))
        }
        aria-label={copied ? "Copied" : "Copy install command"}
        className="grid size-8 shrink-0 place-items-center rounded-sm text-canvas-soft/70 transition-colors hover:bg-canvas-soft/10 hover:text-canvas-soft focus-visible:outline-2 focus-visible:outline-primary"
      >
        {copied ? (
          <Check aria-hidden className="size-4 text-primary" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}

export default CopyCommand;
