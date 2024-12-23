import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Vu Lounge",
  description:
    "Get in touch with Vu Lounge for reservations, private events, or inquiries, Green Lanes, Harringay, Ora offers an extraordinary dining experience for every occasion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Vu Lounge, reservations Green Lanes, Harringay",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
