import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
    return (
        <footer className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#0f1d22] px-2 pt-12">
            <div className="flex w-full max-w-[1300px] flex-col items-center gap-4">
                <div className="w-full flex justify-center items-center gap-3">
                    <div className="flex-grow bg-[#575346] h-[1px]" />
                    <Image
                        src="/images/home/logo.png"
                        width={55}
                        height={69}
                        alt="logo"

                    />
                    <div className="flex-grow bg-[#575346] h-[1px]" />
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:border-r-[2px] md:border-r-[#575346] py-4 grid grid-cols-2 md:grid-cols-3 gap-3 justify-center items-start md:px-10 border-b-[1px] border-b-primary md:border-b-0">
                        <div className="w-full flex flex-col justify-center items-start">
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Our Food</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Drinks menu</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Private Hire</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">What’s on</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Gallery</Link>
                            </Button>
                        </div>

                        <div className="w-full flex flex-col justify-center items-start">
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Blog</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Press</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Contact us</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Career</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Find us</Link>
                            </Button>
                        </div>

                        <div className="w-full flex flex-col justify-center items-start">
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Birthday Bookings</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Corporate events</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Christmas parties</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-start text-lg text-[#C9AB81]"
                                asChild
                            >
                                <Link href="#">Venue Hire</Link>
                            </Button>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2 py-4 flex flex-col md:flex-row gap-3 justify-center items-start md:px-10">
                        <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center md:items-start">
                            <p className="font-opens text-xl font-[500] text-[#C9AB81]">Contact</p>
                            <Link href='https://maps.app.goo.gl/D8eQzDhYmqMcdKcA8' className="w-fit items-center justify-center md:justify-start px-0 py-0 font-opens font-[200] text-center md:text-start text-lg text-[#C9AB81]">
                                Country Club, High Street, <br />Bushey, WD23 1TT<br />
                                info@vulounge.co.uk<br />
                            </Link>
                            <Link href='tel:01923862351' className="w-fit items-center justify-center md:justify-start px-0 py-0 font-opens font-[200] text-center md:text-start text-lg text-[#C9AB81]">01923 862351</Link>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center md:items-start">
                            <p className="font-opens text-xl font-[500] text-[#C9AB81]">Opening hours</p>
                            <p className="w-fit items-center justify-start px-0 py-0 font-opens font-[200] text-center md:text-start text-lg text-[#C9AB81]">
                                Mon-Thurs 4pm-12am<br />Fri-Sat 4pm-2:am <br /> Sun 4pm-12am
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 mt-5">
                    <p className="font-opens text-xl font-[500] text-[#C9AB81] uppercase">Please Note</p>
                    <p className="w-fit  px-0 py-0 font-opens font-[200] text-center text-lg text-[#C9AB81]">
                        Our reservations will be held for<br /> 15minutes after booking.<br />
                        Our Lounge seating area is 18+<br />
                        OUr restaurant is family friendly
                    </p>
                </div>
                <div className="flex w-full items-center justify-center gap-4 md:w-1/3">
                    <Link className="text-[#C9AB81]" href='https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg=='>
                        <Icons.instagram />
                    </Link>
                    <Link className="text-[#C9AB81]" href=''>
                        <Icons.tripAdvisor />
                    </Link>
                    <Link className="text-[#C9AB81]" href='https://www.google.co.in/search?q=vu+lounge&sca_esv=cc3bedc69ac23800&sxsrf=ADLYWIKr1wXU6P_7HRL5yJxU8MpOEMVf-A%3A1734543055616&source=hp&ei=zwZjZ_avI97Q1e8PpdKv-A4&iflsig=AL9hbdgAAAAAZ2MU3xwRiPiihs6wOHdKn8Nv5k1kA6Ca&gs_ssp=eJzj4tVP1zc0zDAvNqyMN04zYLRSNagwsTA3MzQ1SzZJTLFITDNJsjKoSDY3SEs1TDEzNzA3MrZINvDiLCtVyMkvzUtPBQBLDBKJ&oq=vu+lounge&gs_lp=Egdnd3Mtd2l6Igl2dSBsb3VuZ2UqAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjWHVAAWMEQcAB4AJABAJgBeKAB1weqAQMxLji4AQPIAQD4AQGYAgmgAoYIwgIKECMYgAQYJxiKBcICBRAuGIAEwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCBAuGIAEGOUEmAMAkgcDMC45oAf3Sg&sclient=gws-wiz'>
                        <Icons.google />
                    </Link>
                    <Link className="text-[#C9AB81]" href='https://www.facebook.com/VuLounge1?mibextid=ZbWKwL'>
                        <Icons.facebook />
                    </Link>
                </div>
            </div>
            <div className="flex w-full items-center justify-center py-6 border-t-[1px] border-t-[#575346] max-w-[1300px]">
                <p className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
                    <span className="text-primary font-opens">
                        © 2024 VU Lounge,all rights reserved
                    </span>
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