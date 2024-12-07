import Navbar from "@/components/NavBar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Contact from "./(section)/Contact";
import Special from "./(section)/(special)/Special";
import Latest from "./(section)/Latest";
import Menu from "./(section)/Menu";
import Reserve from "./(section)/Reserve";
import Imagecontainer from "./(section)/Image";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero />
        <Welcome />
        <Latest />
        <Special />
        <Reserve />
        <Imagecontainer />
        <Reviews />
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
