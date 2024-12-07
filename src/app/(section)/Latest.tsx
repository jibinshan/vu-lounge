'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";

const Latest = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.latest-one', {
                scrollTrigger: {
                    trigger: ".latest-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.latest-two', {
                scrollTrigger: {
                    trigger: ".latest-two",
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
            gsap.to('.latest-one', {
                scrollTrigger: {
                    trigger: ".latest-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.latest-two', {
                scrollTrigger: {
                    trigger: ".latest-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })
        gsap.to('.latest-arrow', {
            scrollTrigger: {
                trigger: ".latest-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            duration: 0.8

        })

        const splitType = document.querySelectorAll(".head-latest")
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
        <section id="welcome" className="relative flex w-full items-center justify-center bg-transparent">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center lg:items-center justify-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="latest-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                                Latest
                            </p>
                            <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                                <Image src='/images/left.png' alt="left" width={44} height={12} className="latest-arrow w-fit"
                                    style={{
                                        transform: "scale(0.5)"
                                    }}
                                />
                                <span className="head-latest">What`s on<br />
                                    this week</span>
                                <Image src='/images/right.png' alt="right" width={44} height={12} className="latest-arrow w-fit h-fit"
                                    style={{
                                        transform: "scale(0.5)"
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
                        <Image
                            src='/images/home/ora/a.png'
                            alt="right"
                            width={417}
                            height={531}
                            className="about-arrow w-fit h-fit"
                        />
                        <Image
                            src='/images/home/ora/b.png'
                            alt="right"
                            width={417}
                            height={531}
                            className="about-arrow w-fit h-fit"
                        />
                        <Image
                            src='/images/home/ora/c.png'
                            alt="right"
                            width={417}
                            height={531}
                            className="about-arrow w-fit h-fit"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Latest;