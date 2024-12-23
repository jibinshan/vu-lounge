'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Reserve = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.reserve-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.reserve-two', {
                scrollTrigger: {
                    trigger: ".reserve-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.reserve-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.reserve-two', {
                scrollTrigger: {
                    trigger: ".reserve-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })
        gsap.to('.reserve-arrow', {
            scrollTrigger: {
                trigger: ".reserve-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            duration: 0.8

        })

        gsap.to('.reserve-container', {
            scrollTrigger: {
                trigger: ".reserve-container",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            opacity: 1,
            duration: 0.8

        })

        const splitType = document.querySelectorAll(".head-reserve")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.2
                })
            }
        })

    }, [])
    return (
        <section id="reserve" className="relative flex w-full md:h-screen items-center justify-center"
            style={{
                backgroundImage: "url('/images/home/reservebg.png')",
                backgroundSize: 'cover',
            }}
        >
            {/* <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}
            <div
                className="absolute w-full h-[28px] bottom-12 left-0"
                style={{
                    backgroundImage: "url('/images/line.png')",
                    backgroundRepeat: "repeat"
                }}
            />
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col md:flex-row gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center lg:items-center justify-start">
                    {/* <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center items-center">
                        <Image
                            src='/images/home/DSC03448.jpg'
                            width={6024}
                            height={4024}
                            alt="reserve"
                            className="max-w-[603] max-h-[581]"
                        />
                    </div> */}
                    <div className="w-full md:w-1/2 flex flex-col gap-7 justify-center items-center reserve-container"
                        style={{
                            transform: "scale(1.3)",
                            opacity: 0
                        }}
                    >
                        <p className="reserve-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                            Reservation
                        </p>
                        <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                            <Image src='/images/left.png' alt="left" width={44} height={12} className="reserve-arrow w-fit"
                                style={{
                                    transform: "scale(0.5)"
                                }}
                            />
                            <span className="head-reserve">Reserve<br />
                                Your Table</span>
                            <Image src='/images/right.png' alt="right" width={44} height={12} className="reserve-arrow w-fit h-fit"
                                style={{
                                    transform: "scale(0.5)"
                                }}
                            />
                        </p>
                        <p className="reserve-two text-[#9c9999] w-full md:max-w-[400px] text-center md:-ml-[50px]">Reserve your table at VU Lounge for an unforgettable dining experience. Ensure your spot to enjoy our exquisite dishes and vibrant ambiance. Book now and let us make your visit special!</p>
                        <Link href='/table-booking'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7" variant='image'> Book Table</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Reserve;
