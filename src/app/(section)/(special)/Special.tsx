"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({ }) => {
  const { modelData } = useRestaurant()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to('.special-one', {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8

      })

      gsap.to('.special-two', {
        scrollTrigger: {
          trigger: ".special-two",
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
      gsap.to('.special-one', {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8

      })
      gsap.to('.special-two', {
        scrollTrigger: {
          trigger: ".special-two",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8

      })
    })


    const splitType = document.querySelectorAll(".head-special")
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
    gsap.to('.special-arrow', {
      scrollTrigger: {
        trigger: ".special-arrow",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8

    })

  }, [])
  return (
    <section className="relative flex h-full w-full justify-center bg-[#0f1d22]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="special-one font-stone uppercase md:-ml-[50px] text-primary">Recommendations</h3>
        <p className="font-inter non-italic font-[300] uppercase text-primary text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
          <Image src='/images/left.png' alt="left" width={44} height={12} className="special-arrow w-fit"
            style={{
              transform: "scale(0.5)"
            }}
          />
          <span className="head-welcome"> Our best<br />
            specialties</span>
          <Image src='/images/right.png' alt="right" width={44} height={12} className="special-arrow w-fit h-fit"
            style={{
              transform: "scale(0.5)"
            }}
          />
        </p>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {
            modelData && (
              <EmblaCarousel slides={modelData} options={OPTIONS} />
            )
          }
        </div>
      </div>
    </section >
  );
};

export default Special;
