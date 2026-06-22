import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import About from "./components/About";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <FeaturedProperties />
        <About />
        <Stats/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <WhatsAppButton/>
    </>
  );
}
export default App;