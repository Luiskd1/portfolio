import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import {  NextUIProvider } from "@nextui-org/react";
import HeaderPage from "@/components/Header/header";
import FooterPage from "@/components/Footer/FooterPage";
import HeaderMobile from "@/components/Header/headerMobile";
import { ThemeProvider } from "@/components/themeproviders/themeproviders";
import FooterMobile from "@/components/Footer/FooterMobile";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body className={inter.className}>
        <NextUIProvider className="w-full h-screen relative lg:p-16 text-[#8095AB]" style={{ background: 'linear-gradient(135deg, #04060A, #151E27)' }} >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full h-full rounded border border-[#1E2D3D] grid grid-rows-[auto,1fr,auto] ">
              <div className="row-span-1 ">
                <HeaderPage />
                <HeaderMobile />
              </div>
              <div className="row-span-2">
                <div className="h-full  overflow-auto  ">
                  {children}
                </div>
              </div>
              <div className="row-span-3">
                <FooterPage />  
                <FooterMobile/>
              </div>
            </div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
