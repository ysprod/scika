import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Theme/ThemeProvider";
import { clsx } from "clsx";
import { Header } from "@/feature/layout/header";
import { Footer } from "@/feature/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCIKA",
  description: "Developped by YAYA SIDIBE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, 'bg-background h-full')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col ">
            <Header></Header>
            <div className="flex-1 max-w-lg m-auto py-12 w-full">
              {children}
            </div>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
