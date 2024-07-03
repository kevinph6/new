import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/home-page/About";
import AnotherWayJoin from "@/components/home-page/AnotherWayJoin";
import CoinHub from "@/components/home-page/CoinHub";
import Faq from "@/components/home-page/Faq";
import Hero from "@/components/home-page/Hero";
import HowToBuy from "@/components/home-page/HowToBuy";
import Roadmap from "@/components/home-page/Roadmap";
export default function Home() {
  return (
    <>
      <div className="top-bg-img">
        <Header />
        <Hero />
      </div>
      <About />
      <HowToBuy />
      <Roadmap />
      <CoinHub />
      <Faq />
      <AnotherWayJoin />
      <Footer />
    </>
  );
}
