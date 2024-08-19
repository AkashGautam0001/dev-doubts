import type { Metadata } from "next";
import "@/styles/globals.css";
import { Lato, Poppins, Raleway } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "DevDoubts",
  description: "Solve coders problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-black`}>{children}</body>
    </html>
  );
}
