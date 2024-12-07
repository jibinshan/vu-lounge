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
    return (
        <section className="relative flex h-full w-full justify-center bg-transparent">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44">
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
                        <span className="head-review">our clients say</span>
                        <Image src='/images/right.png' alt="right" width={44} height={12} className="review-arrow w-fit h-fit"
                            style={{
                                transform: "scale(0.5)"
                            }}
                        />
                    </p>
                </div>
                <div className="flex w-full items-center justify-center p-4">
                    {reviews && (
                        <Carousel className="w-full px-4">
                            <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                                {reviews.map((review, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="flex w-full basis-full flex-col gap-6 rounded-2xl px-6 py-8 md:basis-1/3 border-[2px] border-primary"
                                    >
                                        <div className="flex w-full items-center gap-2">
                                            <Image
                                                src={
                                                    review.profile_photo_url ||
                                                    "/images/home/reviews/pictures/anna-mathew.svg"
                                                }
                                                width={64}
                                                height={64}
                                                alt={review.author_name}
                                            />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-primary">{review.author_name}</p>
                                                <span className="text-primary">
                                                    {review.relative_time_description}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            {/* {Array.from({ length: review.rating }).map((_, index) => (
                                                <Icons.star key={index} className="text-primary" />
                                            ))} */}
                                            <Icons.star key={index} className="text-primary" />
                                            <Icons.star key={index} className="text-primary" />
                                            <Icons.star key={index} className="text-primary" />
                                            <Icons.star key={index} className="text-primary" />
                                            <Icons.star key={index} className="text-primary" />
                                        </div>
                                        <div className="">
                                            <p className="text-primary h-[240px]">{review.text}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                            </div>
                        </Carousel>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;