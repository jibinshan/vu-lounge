import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Ora Lounge",
  description:
    "Get in touch with Ora Lounge for reservations, private events, or inquiries, Green Lanes, Harringay, London, Ora offers an extraordinary dining experience for every occasion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Ora Lounge, reservations Green Lanes, Harringay, London",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
