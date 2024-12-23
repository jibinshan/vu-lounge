import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Vu Lounge",
  description:
    "Learn about Vu Lounge journey from a small eatery to a celebrated dining destination. With a focus on quality, sustainability, and an unforgettable atmosphere, Ora brings culinary artistry to every plate.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:
    " best steak, sustainable dining, fine dining , premium beef cuts, chef-selected steaks, dining experience",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
