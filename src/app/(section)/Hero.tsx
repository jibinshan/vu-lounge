"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Hero = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);

  const scrollToBottom = (): void => {
    const currentSection = document.getElementById("hero");
    const nextSection = currentSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add timer to show content after 20 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 20000);

    // Only run GSAP animations after content is shown
    if (showContent) {
      const tl = gsap.timeline();
      tl.from(".head-container", 1.5, {
        y: 50,
        opacity: 1,
        ease: "power4.out",
      })
        .from(".head-hero", 1, {
          x: 200,
          opacity: 0,
          delay: -1.5,
        })
        .from(".hero-button", 1, {
          y: 100,
          opacity: 0,
          ease: "power4.out",
          delay: -1.5,
        });
      tl.from(".down-button", 1, {
        opacity: 0,
        duration: 1,
        delay: -0.5,
      }).to(".down-button", 1, {
        opacity: 1,
        duration: -1.5,
        ease: "bounce.out",
      });
    }

    return () => clearTimeout(timer);
  }, [showContent]);

  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-start">
        <div className="w-full h-full max-w-[1360px] border-x-[1px] border-x-primary z-30"></div>
      </div>
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div
          className="-left-80 top-0 z-0 hidden h-full w-full bg-black/30 md:flex lg:absolute lg:z-20"
          style={{
            width: "100%", // Full width of the div
            height: "100vh", // Full height of the div
            borderRadius: "957px", // Adjust if you need rounded corners
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.16) 0%, rgba(0, 0, 0, 0) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40% 100%", // Restrict gradient to 10% of the width
            backgroundPosition: "left", // Align the gradient to the left side
          }}
        ></div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute right-0 top-0 flex h-full w-full justify-center overflow-hidden">
          {/* <Image
                        src='/images/home/hero.png'
                        alt="hero"
                        width={1093}
                        height={967}
                        className="min-h-full scale-x-[-1] object-cover"
                    /> */}

          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/videos/vu-lounge-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          // poster=""
          ></video>
        </div>
        {showContent && (
          <>
            <div className="hero-container z-50 flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-9 px-4">
              <div className="flex w-full flex-col items-center justify-center gap-2 md:items-start">
                <h1 className="head-hero w-full text-center font-inter text-5xl font-[200] uppercase tracking-[-5.12px] text-[#C2C2C2] sm:text-5xl md:text-7xl lg:leading-[80px]">
                  Welcome to
                  <br />
                  VU Lounge
                </h1>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
                <Link href="/table-booking">
                  <Button
                    className="hero-button flex items-center justify-center gap-3 px-10 py-7"
                    variant="image"
                  >
                    Book A Table
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button
                    className="hero-button flex items-center justify-center gap-3 px-10 py-7"
                    variant="image"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
            <Link href="" className="absolute bottom-10 left-28 z-40">
              <Button
                className="down-button flex items-center justify-center gap-3 rounded-full bg-transparent px-3 text-white hover:text-black"
                variant="ghost"
                onClick={scrollToBottom}
              >
                <ArrowDown className="font-extralight text-[#e2a14b]" />
                <span className="font-inter uppercase tracking-[2px] text-white hover:text-black">
                  SCROLL DOWN
                </span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
