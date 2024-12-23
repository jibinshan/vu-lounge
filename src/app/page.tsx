'use client'
import Navbar from "@/components/NavBar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Contact from "./(section)/Contact";
import Latest from "./(section)/Latest";
import Reserve from "./(section)/Reserve";
import Imagecontainer from "./(section)/Image";
import Ambiance from "./(section)/Ambiance";
import Tips from "./(section)/Tips";
import { VideoCarousel } from "./(section)/Videos";
import Menu from "./(section)/Menu";
import Special from "./(section)/Special";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="fixed" />
        <Hero />
        <Welcome />
        <Latest />
        <Ambiance />
        <Special />
        <VideoCarousel />
        <Reserve />
        <Tips />
        <Reviews />
        <Imagecontainer />
        <Menu />
        {/* <Menu /> */}
        {/* <Reservation /> */}
        {/* <Flavour /> */}
        {/* <Testimonials /> */}
        {/* <Map /> */}
        <ConnectWithUs />
        <Contact />
        <Footer />
      </div>
    </main >
  );
}
