import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
    return (
        <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-[#0f1d22] px-2 py-12">
            <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
                <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/menu">Menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/about-us">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/table-booking">Table booking</Link>
                    </Button>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-12 md:w-1/3">
                    <Image
                        src="/images/home/logo.png"
                        width={55}
                        height={69}
                        alt="logo"

                    />
                    <Link href="https://maps.app.goo.gl/fvPgSt9sysjK8Y9p8" target="_blank" className="text-center">
                        Country Club, High Street<br /> Bushey, London WD23 1TT
                    </Link>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/menu">Menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/about-us">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/table-booking">Table booking</Link>
                    </Button>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3">
                    <div></div>
                    <p className="font-semibold uppercase text-[#959595]">
                        Opening hours
                    </p>
                    <p className="text-[##959595]">Sun - Thur: 4pm - 12am</p>
                    <p className="text-[##959595]">Fri - Sat: 4pm - 2am</p>
                </div>
            </div>
            <div className="flex w-full items-center justify-center">
                <p className="w-fit px-4 text-center text-xl">
                    © 2024 VU Lounge,all rights reserved | {" "}
                    <Link
                        href="https://foodo.ai"
                        className="text-primary hover:underline"
                        target="_blank"
                    >
                        Powered By Foodo
                    </Link>
                </p>
            </div>
        </footer >
    );
};

export default Footer;