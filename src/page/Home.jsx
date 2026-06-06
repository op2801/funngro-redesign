import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies/>
      <HowItWorks/>
      <Categories/>
      <Benefits/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Home;