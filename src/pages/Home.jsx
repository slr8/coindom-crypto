import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Join from "../components/Join";
import MarketUpdate from "../components/MarketUpdate";
import NavBar from "../components/NavBar";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
      <Card />
    </>
  );
}

export default Home;
