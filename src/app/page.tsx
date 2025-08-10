import Herosection from "@/app/Component/Herosection";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Myskills from "./Component/Myskills";
import Projects from "./Component/Projects";
import Services from "./Component/Services/Services";

const Home = async () => {
  const res = await fetch(
    "https://sports-facility-booking-platform-sable.vercel.app/api/slots/project",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  // console.log(data)
  return (
    <>
      <Herosection />
      <Myskills />
      <Services />

      <Projects projects={data?.data} />

      <Contact />
      <About />
    </>
  );
};

export default Home;
