import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Map from "./(section)/Map";
import Drinks from "./(section)/Drinks";


const page = ({ }) => {
    return (
        <main className="relative flex h-full w-full bg-[#070d0f]">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Navbar />
                <Drinks />
                <Map />
                <Footer />
            </div>
        </main>
    );
};

export default page;
