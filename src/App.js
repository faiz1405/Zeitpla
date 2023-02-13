import Download from "./components/Download";
import Fitur from "./components/Fitur";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Whyus from "./components/Whyus";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <Fitur />
      <Price />
      <Testimonial />
      <Download />
      <Footer />
    </>
  );
}

export default App;
