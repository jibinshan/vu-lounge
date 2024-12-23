'use client'
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const Ambiance = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.ambiance-item', {
            scrollTrigger: {
                trigger: ".ambiance-item",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            opacity: 1,
            duration: 0.8

        })
    }, [])
    return (
        <section className="relative w-full flex items-center justify-center h-fit md:h-[100vh] px-4 py-24 overflow-y-hidden">
            <div className="absolute w-full h-full top-0 left-0 flex flex-col md:flex-row z-10">
                <div className="w-full h-full md:w-1/2">
                    <Image
                        src='/images/home/ambiance/1.png'
                        width={960}
                        height={951}
                        alt="1"
                    />
                </div>
                <div className="w-full h-full md:w-1/2">
                    <Image
                        src='/images/home/ambiance/2.png'
                        width={960}
                        height={951}
                        alt="2"
                    />
                </div>
            </div>
            <div className="relative md:w-[700px] py-12 px-4 flex flex-col gap-8 items-center justify-center z-20 bg-[#0b1315] ambiance-item"
                style={{
                    transform: "scale(1.3)",
                    opacity: 0
                }}
            >
                <div className="absolute w-full h-[28px] top-0 left-0"
                    style={{
                        backgroundImage: "url('/images/line.png')",
                        backgroundRepeat: "repeat"
                    }}
                />
                <p className="reserve-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                    Our Ambiance
                </p>
                <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                    <Image src='/images/left.png' alt="left" width={44} height={12} className="reserve-arrow w-fit"
                        style={{
                            transform: "scale(0.5)"
                        }}
                    />
                    <span className="head-reserve">A PLACE<br />
                        TO UNWIND</span>
                    <Image src='/images/right.png' alt="right" width={44} height={12} className="reserve-arrow w-fit h-fit"
                        style={{
                            transform: "scale(0.5)"
                        }}
                    />
                </p>
                <p className="reserve-two text-[#AAA9A9] w-full md:max-w-[400px] text-center md:-ml-[50px]">Reserve your table at VU Lounge for an unforgettable dining experience. Ensure your spot to enjoy our exquisite dishes and vibrant ambiance. Book now and let us make your visit special!</p>
                <Link href='/table-booking'>
                    <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7" variant='image'> Book Now</Button>
                </Link>
                <div className="absolute w-full h-[28px] bottom-0 left-0"
                    style={{
                        backgroundImage: "url('/images/line.png')",
                        backgroundRepeat: "repeat"
                    }}
                />
            </div>
        </section>
    )
}

export default Ambiance