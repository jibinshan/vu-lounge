import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Birthstone } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "VU Lounge",
  description: "Welcome to VU Lounge, your premier destination in Bushey for a sophisticated blend of culinary excellence and vibrant ambiance. Indulge in an exquisite dining experience",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
};

const stone = Birthstone({
  subsets: ["latin"],
  variable: "--font-stone",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-inter flex min-h-screen text-[#FBEAD2] antialiased",
          stone.variable,
          inter.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}
