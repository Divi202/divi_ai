import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divi AI",
  description: "Divi AI - Your AI Fashion Stylist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
