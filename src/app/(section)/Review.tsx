"use client";
import { Icons } from "@/components/Icon";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';

const Reviews = ({ }) => {
    const { reviews } = useRestaurant();
    console.log(reviews, "==review");

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.review-one', {
                scrollTrigger: {
                    trigger: ".review-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                opacity: 1,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.review-one', {
                scrollTrigger: {
                    trigger: ".review-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })

        gsap.to('.review-arrow', {
            scrollTrigger: {
                trigger: ".review-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            duration: 0.8

        })

        const splitType = document.querySelectorAll(".head-review")
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
                    stagger: 0.4
                })
            }
        })

    }, [])

    const text = "our clients say"
    return (
        <section className="relative flex h-full w-full justify-center bg-transparent">
            <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-start">
                <div className="w-full h-full max-w-[1360px] border-x-[1px] border-x-primary z-30"></div>
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 pb-24">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
                    <p className="review-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                        Testimonial
                    </p>
                    <p className="font-inter non-italic font-[300] uppercase text-primary text-2xl md:text-6xl text-center flex gap-3 justify-center items-center">
                        <Image src='/images/left.png' alt="left" width={44} height={12} className="review-arrow w-fit"
                            style={{
                                transform: "scale(0.5)"
                            }}
                        />
                        <span className="head-review">
                            {text.split("").map((char, index) => (
                                <span key={index} className="key" >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                        <Image src='/images/right.png' alt="right" width={44} height={12} className="review-arrow w-fit h-fit"
                            style={{
                                transform: "scale(0.5)"
                            }}
                        />
                    </p>
                </div>
                <div className="flex w-full items-center justify-center p-4">
                    <Carousel className="w-full md:w-[1100px]">
                        <CarouselContent className="">
                            {reviews?.map((review, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 flex justify-center">
                                    <div className="w-full flex flex-col px-3 gap-2">
                                        <div className="relative w-full py-4 px-4 md:h-[300px] flex flex-col gap-3 justify-center items-center">
                                            <div
                                                className="absolute w-full h-full hidden md:flex left-0 top-0 z-10"
                                                style={{
                                                    backgroundImage: "url('/images/review.svg')",
                                                    backgroundSize: "100%",
                                                    backgroundRepeat: "no-repeat"
                                                }}
                                            />
                                            <div className="flex w-full justify-center z-20">
                                                <Icons.star key={index} className="text-primary" />
                                                <Icons.star key={index} className="text-primary" />
                                                <Icons.star key={index} className="text-primary" />
                                                <Icons.star key={index} className="text-primary" />
                                                <Icons.star key={index} className="text-primary" />
                                            </div>
                                            <div className="z-20">
                                                <p className="text-primary line-clamp-5 text-center">{review.text}</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center md:pl-8 gap-2">
                                            <Image
                                                src={
                                                    review.profile_photo_url ||
                                                    "/images/home/reviews/pictures/anna-mathew.svg"
                                                }
                                                width={64}
                                                height={64}
                                                alt={review.author_name}
                                            />
                                            <div className="flex flex-col justify-center items-center">
                                                <p className="text-primary">{review.author_name}</p>
                                                <span className="text-[#9C9995]">
                                                    {review.relative_time_description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl z-40" variant='default' />
                        <CarouselNext className="hidden md:flex h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl z-40" variant='default' />
                        <div className="md:hidden flex items-center justify-center gap-7 pt-12">
                            <CarouselPrevious className="static h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                            <CarouselNext className="static h-12 w-12 bg-[#0e1719] text-primary outline-none shadow-2xl" variant='default' />
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
};

export default Reviews;