import { AiSkills } from "@/components/home/ai-skills";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Skills />
        <AiSkills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
