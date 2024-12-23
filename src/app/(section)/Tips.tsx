'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Tips = ({ }) => {
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

        gsap.to('.tips-container', {
            scrollTrigger: {
                trigger: ".tips-container",
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

    const text = "OUR TIPS"
    return (
        <section id="reserve" className="relative flex w-full md:h-fit items-center justify-center"
            style={{
                backgroundImage: "url('/images/home/tips/bg.png')",
                backgroundSize: 'cover',
            }}
        >
            <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-start">
                <div className="w-full h-full max-w-[1360px] border-x-[1px] border-x-primary z-30"></div>
            </div>
            {/* <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col md:flex-row gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center lg:items-center justify-start">
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Image
                            src='/images/home/tips/1.png'
                            width={427}
                            height={590}
                            alt="tips"
                            className="md:max-w-[300px] tips-container"
                            style={{
                                transform: "scale(1.3)",
                                opacity: 0
                            }}
                        />
                        <Image
                            src='/images/home/tips/2.png'
                            width={427}
                            height={590}
                            alt="tips"
                            className="md:mt-[100px] md:max-w-[300px] tips-container"
                            style={{
                                transform: "scale(1.3)",
                                opacity: 0
                            }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-7 justify-center items-center">
                        <p className="reserve-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                            Our food philosophy
                        </p>
                        <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                            <Image src='/images/left.png' alt="left" width={44} height={12} className="reserve-arrow w-fit"
                                style={{
                                    transform: "scale(0.5)"
                                }}
                            />
                            <span className="head-reserve">
                                {text.split("").map((char, index) => (
                                    <span key={index} className="key" >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>
                            <Image src='/images/right.png' alt="right" width={44} height={12} className="reserve-arrow w-fit h-fit"
                                style={{
                                    transform: "scale(0.5)"
                                }}
                            />
                        </p>
                        <p className="reserve-two text-[#9c9999] w-full md:max-w-[400px] text-center md:-ml-[50px]">Reserve your table at VU Lounge for an unforgettable dining experience. Ensure your spot to enjoy our exquisite dishes and vibrant ambiance. Book now and let us make your visit special!</p>
                        <Link href='/table-booking'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7" variant='image'> Book Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Tips;
