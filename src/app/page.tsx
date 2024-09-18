

import Herosection from "@/app/Component/Herosection";
import Myskills from "./Component/Myskills";
import Services from "./Component/Services/Services";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import About from "./Component/About";


const Home = async () => {

  const res = await fetch('http://localhost:5000/project')

  const data = await res.json()

  console.log(data)
  return (
    <>

      <Herosection />
      <Myskills />
      <Services />

      <Projects projects={data} />

      <Contact />
      <About />
    </>
  );
}


export default Home