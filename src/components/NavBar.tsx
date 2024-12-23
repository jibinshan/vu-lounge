"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartSheet from "./cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone, Plus } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = ({
    position = "static",
}: {
    position?: "static" | "fixed" | "absolute";
}) => {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
            setIsScrolled(window.scrollY > heroHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                `${position} top-0 z-50 flex h-[10vh] w-full flex-col bg-transparent px-4 transition-all duration-0 ease-in-out justify-between items-center border-b-[1px] border-b-primary`,
                isScrolled && "bg-black border-b-0",
                pathname !== "/" && "bg-black border-b-0",
            )}
        >
            <div
                className={cn(
                    "flex h-full relative w-full items-center justify-between gap-2",
                )}
            >
                <Link href="/">
                    <Image src="/images/home/logo.png" width={55} height={69} alt="logo" className="w-12 absolute top-1" />
                </Link>

                <div className={cn(
                    "hidden md:flex flex-row items-center min-w-[1300px] h-full justify-center gap-9",
                )} >
                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase"
                    >
                        <Link href="/" className="flex items-center justify-center gap-2 text-white"><span>Home</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="/menu" className="flex items-center justify-center gap-2 text-white"><span>Menu</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="#" className="flex items-center justify-center gap-2 text-white"><span>Drinks & Desserts</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="#" className="flex items-center justify-center gap-2 text-white"><span> Shisha</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>

                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="/table-booking" className="flex items-center justify-center gap-2 text-white"><span>Reservation</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="px-0 uppercase text-accent"
                    >
                        <Link href="/contact" className="flex items-center justify-center gap-2 text-white"><span>Contact Us</span> <Plus className="text-primary h-4 w-4" /></Link>
                    </Button>
                </div>

                <Sidebar>
                    <Button
                        variant="ghost"
                        className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
                    >
                        <span className="sr-only">Menu</span>
                        <EqualizerIcon />
                    </Button>
                </Sidebar>
            </div>




        </nav>
    );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
    return (
        <div className="equalizer-icon rotate">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};
