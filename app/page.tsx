import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Shop from "@/components/sections/Shop";
import Project from "@/components/sections/Project";
import CaseStudies from "@/components/sections/CaseStudies";
import Members from "@/components/sections/Members";
import News from "@/components/sections/News";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Shop />
      <Project />
      <CaseStudies />
      <Members />
      <News />
      <Faq />
      <Contact />
    </>
  );
}
