import Herosection from "@/app/Component/Herosection";
import { Suspense } from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import ProjectLoading from "./Component/Loading/ProjectLoading";
import Myskills from "./Component/Myskills";
import Projects from "./Component/Projects";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience";

const Home = async () => {
  return (
    <>
      <Herosection />
      <Myskills />
      <Experience />
      <Services />
      <Suspense fallback={<ProjectLoading />}>
        <Projects />
      </Suspense>
      <Contact />
      <About />
    </>
  );
};

export default Home;
