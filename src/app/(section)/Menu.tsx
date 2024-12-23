'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";

const Menu = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
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
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })
        gsap.to('.menu-arrow', {
            scrollTrigger: {
                trigger: ".menu-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            duration: 0.8

        })

        const splitType = document.querySelectorAll(".head-menu")
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
        <section id="welcome" className="relative flex w-full items-center h-fit justify-center bg-[#0f1d22]">
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full items-center lg:items-center justify-center">
                    <div className="w-full flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-12">
                            <div className="w-full flex flex-col gap-4 items-center justify-center">
                                <p className="menu-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
                                    Special selection
                                </p>
                                <p className="font-inter non-italic font-[300] uppercase text-primary text-2xl md:text-6xl text-center flex gap-3 justify-center items-center">
                                    <Image src='/images/left.png' alt="left" width={44} height={12} className="menu-arrow w-fit"
                                        style={{
                                            transform: "scale(0.5)"
                                        }}
                                    />
                                    <span className="head-menu">From our menu</span>
                                    <Image src='/images/right.png' alt="right" width={44} height={12} className="menu-arrow w-fit h-fit"
                                        style={{
                                            transform: "scale(0.5)"
                                        }}
                                    />
                                </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center md:justify-between gap-5">
                                <Image
                                    src='/images/home/facility/side.png'
                                    alt="side"
                                    width={107}
                                    height={551}
                                    className="hidden md:flex md:w-fit md:h-fit"
                                />
                                <div className="w-full h-full md:w-9/12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-9 md:gap-14">

                                    <div className="w-full md:w-1/2 flex flex-col gap-9">
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Beef burger meal</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£32</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Classic greek salad, barrel aged feta cheese, bread</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Roasted lamb rump</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£25</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Grilled lamb cutlets, pomegranate glaze, butternut squash</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Pan seared sea bass</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£38</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Saffron and mussel`s broth, new potatoes, edamame beans</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">King prawns and lobster</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£38</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Creamy saffron, sauce Vierge</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Citrus cured salmon</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£41</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Horseradish creme fraiche, beetroot mousse, oil</p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col gap-9">
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Pan seared scallops</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£29</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Saffron, celeriac puree, black pudding, olive oil</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Baked Camembert</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£25</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Red onion marmelade, garlic Foccacia bread, grilled figs</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Braised ox cheek ravioli</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£23</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Mediterranean olives casserole, celeriac puree, mushrooms</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Corn fed chicken</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£17</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Wild mushrooms, truffle potatoes, braised leeks, carrots</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-primary text-lg">Nduja pork chicken terrine</p>
                                                <div className="flex-grow border-y py-[2px] border-y-primary h-[1px]"></div>
                                                <p className="w-auto flex items-end text-primary text-lg">£41</p>
                                            </div>
                                            <p className="text-[#9aa0a2] text-sm">Smoked duck breast, pistachio, smoked pancetta</p>
                                        </div>
                                    </div>

                                </div>
                                <Image
                                    src='/images/home/facility/side.png'
                                    alt="side"
                                    width={107}
                                    height={551}
                                    className="hidden md:flex md:w-fit md:h-fit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Menu;
