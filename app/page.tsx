import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MeetOurFounders from "./components/MeetOurFounders";
import OurAssociates from "./components/OurAssociates";
import SharedByOurCustomers from "./components/SharedByOurCustomers";
import Quotes from "./components/Quotes";

export default function Home() {
  return (
    <main className="h-dvh w-full">
      <Header />
      <Hero />
      <Services />
      <About />
      <OurAssociates />
      {/* <OurVisionMission /> */}
      <MeetOurFounders />
      <Quotes />
      <SharedByOurCustomers />
      <Footer />
    </main>
  );
}
