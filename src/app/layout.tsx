import type { Metadata } from "next";
import { Montserrat, Roboto_Serif } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const roboto = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Juan R. T.",
  description: "Portfolio of Juan R.T, a full-stack developer.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={twMerge(roboto.variable, montserrat.variable, "antialiased font-sans")}
      >
        <link rel="icon" href="/juan-memoji.png" sizes="any" />
        {children}
      </body>
    </html >
  );
}
