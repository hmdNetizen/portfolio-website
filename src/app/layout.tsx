import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--ibm-plex-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "Hamed Jimoh | Frontend Developer",
  description:
    "A frontend web developer from Lagos, Nigeria. I spend a lot of my time learning and building stuff for the web through carefully crafted code and user-friendly design and implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${IBMPlex.variable} ${poppins.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
