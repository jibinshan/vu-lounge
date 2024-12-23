"use client";

import { useEffect, useRef, useState } from "react";

const TableBooking = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Create stylesheet link
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "//onsass.designmynight.com?theme=dark";

    // Create script element
    const script = document.createElement("script");
    script.src = "//widgets.designmynight.com/bookings-partner.min.js";
    script.setAttribute("dmn-booking-form", "");
    script.setAttribute("venue", "5f58d089ccb4d752173714a3");
    script.setAttribute("hide-offers", "");
    script.setAttribute("theme", "");

    const currentRef = containerRef.current;

    // Add stylesheet and script to container
    if (currentRef) {
      currentRef.appendChild(styleLink);
      currentRef.appendChild(script);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        currentRef.innerHTML = "";
      }
    };
  }, [mounted]);

  return (
    <div className="flex h-full w-full max-w-[1300px] items-center justify-center gap-[1.2rem] py-12">
      <div
        id="widget-container"
        className="flex h-full w-full items-center justify-center"
        ref={containerRef}
      />
    </div>
  );
};

export default TableBooking;
