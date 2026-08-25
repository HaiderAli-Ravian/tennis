import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "@/app/providers";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tennis Dashboard | Live Scores",
  description:
    "A Figma-accurate tennis live-scores dashboard built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
