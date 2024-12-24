import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Map from "../shisha/(section)/Map";
import Shisha from "../shisha/(section)/Shisha";


const page = ({ }) => {
    return (
        <main className="relative flex h-full w-full bg-[#070d0f]">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Navbar />
                <Shisha />
                <Map />
                <Footer />
            </div>
        </main>
    );
};

export default page;
