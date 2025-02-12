import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../store/reduxProvider";
import SessionGuard from "../components/SessionGuard";

const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Providers>
          <SessionGuard />
          {children}
        </Providers>
      </body>
    </html>
  );
}
