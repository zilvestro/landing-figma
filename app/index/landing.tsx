import About from "./components/about";
import Benefits from "./components/benefits";
import Faq from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Join from "./components/join";
import Partners from "./components/partners";
import Potential from "./components/potential";
import Privilege from "./components/privilege";
import Reviews from "./components/reviews";
import Setup from "./components/setup";
import Story from "./components/story";

export default function Landing() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Potential />
      <Reviews />
      <Benefits />
      <Features />
      <Setup />
      <Privilege />
      <Story />
      <Faq />
      <Join />
    </>
  );
}
