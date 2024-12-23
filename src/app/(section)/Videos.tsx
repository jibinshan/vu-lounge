'use client'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";


interface Review {
    name: string;
    content: {
        type: "video" | "text";
        value: string;
    };
    img: string;
}

const items: Review[] = [

    {
        name: 'first',
        content: {
            type: "video",
            value: "/videos/reels/1.mp4",
        },
        img: "/videos/reels/1.png",
    },
    {
        name: 'second',
        content: {
            type: "video",
            value: "/videos/reels/2.mp4",
        },
        img: "/videos/reels/2.png",
    },
    {
        name: 'three',
        content: {
            type: "video",
            value: "/videos/reels/3.mp4",
        },
        img: "/videos/reels/3.png",
    },
    {
        name: 'four',
        content: {
            type: "video",
            value: "/videos/reels/4.mp4",
        },
        img: "/videos/reels/4.png",
    },
    {
        name: 'five',
        content: {
            type: "video",
            value: "/videos/reels/5.mp4",
        },
        img: "/videos/reels/5.png",
    },

];

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export const VideoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const videoRefs = React.useRef<Record<string, HTMLVideoElement | null>>({});
    const autoPlayRef = React.useRef<NodeJS.Timeout>();
    const { width } = useWindowSize();

    const handleVideoPlay = (name: string) => {
        const video = videoRefs.current[name];
        if (video) {
            if (video.paused) {
                void video.play();
                setPlayingVideo(name);
            } else {
                video.pause();
                setPlayingVideo(null);
            }
        }
    };

    const stopAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const handleNext = () => {
        stopAutoPlay();
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        stopAutoPlay();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    React.useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
            }, 3000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying]);

    const getItemStyle = (index: number) => {
        const diff = (index - currentIndex + items.length) % items.length;

        // Only show center card below sm breakpoint (640px)
        if (width > 0 && width < 640) {
            return index === currentIndex ? "opacity-100 translate-x-[-50%] scale-100" : "opacity-0 translate-x-full pointer-events-none";
        }

        // Show partial side cards between sm and lg
        if (width > 0 && width < 1024) {
            if (diff === 0) return "opacity-100 translate-x-[-50%] scale-100 z-10";
            if (diff === 1) return "opacity-75 translate-x-[20%] scale-90 pointer-events-none";
            if (diff === items.length - 1) return "opacity-75 translate-x-[-120%] scale-90 pointer-events-none";
            return "opacity-0 pointer-events-none";
        }

        // Full three-card display on lg and above
        if (diff === 0) return "opacity-75 -translate-x-[calc(150%+2rem)] lg:-translate-x-[calc(150%+4rem)]";
        if (diff === 1) return "opacity-100 translate-x-[-50%] lg:z-10 scale-100 lg:scale-110";
        if (diff === 2) return "opacity-75 translate-x-[calc(50%+2rem)] lg:translate-x-[calc(50%+4rem)]";
        return "opacity-0 pointer-events-none";
    };

    return (
        <section className="w-full bg-[#070d0f] py-24 lg:px-6">
            <div className="w-full space-y-16 md:space-y-16 overflow-hidden pt-6" >
                <div className="relative mx-auto h-[300px] md:h-[450px] max-w-[1400px] px-4">
                    <div className="relative h-full w-full">
                        {items.map((item, idx) => (
                            <div
                                key={item.name}
                                className={`absolute left-1/2 top-0 w-full max-w-[260px] transition-all duration-500 ease-in-out sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] ${getItemStyle(idx)}`}
                            >
                                {item.content.type === "video" && (
                                    <div className="group relative h-[350px] w-full overflow-hidden rounded-lg shadow-lg sm:h-[400px] lg:h-[450px]">
                                        <video
                                            ref={(el) => {
                                                if (el) videoRefs.current[item.name] = el;
                                            }}
                                            className="h-full w-full object-cover"
                                            poster={item.img}
                                            playsInline
                                            preload="none"
                                        >
                                            <source src={item.content.value} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <button
                                            onClick={() => handleVideoPlay(item.name)}
                                            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-black transition-transform hover:scale-110"
                                        >
                                            {playingVideo === item.name ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 translate-x-0.5" />}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-primary transition-transform hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-primary transition-transform hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>
                {/* <div className="hidden mt-2 md:flex w-full items-center justify-center gap-4 lg:mt-9 pb-5">
                    <button
                        onClick={handlePrev}
                        className="flex md:hidden h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-primary text-black transition-transform hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="flex md:hidden h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-primary text-black transition-transform hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div> */}
            </div>
        </section>
    );
};
