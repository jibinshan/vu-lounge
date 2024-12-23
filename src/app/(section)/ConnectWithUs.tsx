'use client'

import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConnectWithUs = ({ }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        duration: 1

      })

    })

    mm.add("(min-width:501px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        opacity: 1,
        duration: 1

      })
    })


    const splitType = document.querySelectorAll(".head-connect")
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

    gsap.to('.connect-arrow', {
      scrollTrigger: {
        trigger: ".connect-arrow",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8

    })

  }, [])

  const text = "Connect us"
  return (
    <section
      id="connect"
      className="relative flex w-full items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-start">
        <div className="w-full h-full max-w-[1360px] border-x-[1px] border-x-primary z-30"></div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-6/12 top-5/12 flex items-center justify-center w-full h-full overflow-hidden"
      // style={{
      //   borderRadius: '1533px',
      //   background: 'radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.14) 0%, rgba(0, 0, 0, 0.00) 100%)',
      //   filter: 'blur(67px)',
      // }}
      >
      </div>
      <div className="max-w-[1250px] px-4 py-12 lg:px-0 lg:py-24 flex flex-col gap-12">

        <div className="flex w-full flex-col items-center justify-center lg:flex-row">

          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <p className="connect-one font-stone font-[200] text-xl text-primary md:-ml-[50px]">
              Follow us
            </p>
            <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
              <Image src='/images/left.png' alt="left" width={44} height={12} className="connect-arrow w-fit"
                style={{
                  transform: "scale(0.5)"
                }}
              />
              <span className="head-connect text-2xl md:text-5xl">
                {text.split("").map((char, index) => (
                  <span key={index} className="key" >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <Image src='/images/right.png' alt="right" width={44} height={12} className="connect-arrow w-fit h-fit"
                style={{
                  transform: "scale(0.5)"
                }}
              />
            </p>
          </div>
          {/* <div className="mt-10 flex items-center gap-7">
              <CarouselPrevious className="static" variant="ghost" />
              <CarouselNext className="static" />
            </div> */}
        </div>
        {/* <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-6">
          <div className="relative">
            <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
            <Image
              src="/images/home/connect/image1.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
            <Image
              src="/images/home/connect/image2.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
            <Image
              src="/images/home/connect/image3.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
          </div>

          <div className="relative">
            <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
            <Image
              src="/images/home/connect/image4.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
          </div>
        </div> */}

        <div className="relative hidden md:flex w-full max-w-[1300px]">
          <div className="w-full grid grid-cols-4">
            <Image
              src="/images/home/connect/image1.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/image2.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/image3.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/image4.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/5.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/6.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/7.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/8.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
          </div>
          <div className="absolute top-[270px] w-full flex justify-center z-40">
            <Link href='https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg=='>
              <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 uppercase" variant='outline'>Follow Us On Instagram</Button>
            </Link>
          </div>
        </div>

        <div className="relative md:hidden w-full flex flex-col gap-3 justify-center items-center">
          <div className="w-full grid grid-cols-1 gap-3">
            <Image
              src="/images/home/connect/image1.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />
            <Image
              src="/images/home/connect/image2.png"
              width={380}
              height={395}
              alt="alt"
              className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
            />

          </div>
          <div className=" w-full flex justify-center z-40">
            <Link href='https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg=='>
              <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 uppercase" variant='outline'>Follow Us On Instagram</Button>
            </Link>
          </div>
        </div>

      </div>
    </section >
  );
};

export default ConnectWithUs;
