'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
    "/images/home/ora/a.png", '/images/home/ora/b.png', '/images/home/ora/c.png', "/images/home/ora/a.png",
]

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
        gsap.to('.carousal-item', {
            scrollTrigger: {
                trigger: ".carousal-item",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            opacity: 1,
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
            <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-start">
                <div className="w-full h-full max-w-[1360px] border-x-[1px] border-x-primary z-30"></div>
            </div>
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full max-w-[1250px] items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full items-center lg:items-center justify-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="latest-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                                Latest
                            </p>
                            <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                                <Image src='/images/left.png' alt="left" width={44} height={12} className="latest-arrow w-fit"
                                    style={{
                                        transform: "scale(0.5)",
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
                    <Carousel className="w-full md:w-[1100px] carousal-item"
                        style={{
                            transform: "scale(1.3)",
                            opacity: 0
                        }}
                    >
                        <CarouselContent className="">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                                    <Image
                                        src={image}
                                        alt="right"
                                        width={417}
                                        height={531}
                                        className="about-arrow w-full md:w-[300px] md:h-fit"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                        <CarouselNext className="hidden md:flex h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                        <div className="md:hidden flex items-center justify-center gap-7 pt-12">
                            <CarouselPrevious className="static h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                            <CarouselNext className="static h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                        </div>
                    </Carousel>
                </div>
            </div >
        </section >
    );
};

export default Latest;