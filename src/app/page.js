import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/home-page/About";
import Hero from "@/components/home-page/Hero";
import HowToBuy from "@/components/home-page/HowToBuy";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Footer />
    </>
  );
}
