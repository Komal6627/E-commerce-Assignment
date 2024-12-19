import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";


export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProductListing/>
    </>
  );
}
