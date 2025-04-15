import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <HowItWorks />
      <Footer />
    </>
  );
}
