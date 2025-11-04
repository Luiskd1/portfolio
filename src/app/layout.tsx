import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import {  NextUIProvider } from "@nextui-org/react";
import HeaderPage from "@/components/Header/header";
import FooterPage from "@/components/Footer/FooterPage";
import HeaderMobile from "@/components/Header/headerMobile";
import { ThemeProvider } from "@/components/themeproviders/themeproviders";
import FooterMobile from "@/components/Footer/FooterMobile";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Santana | Full Stack Developer Portfolio 2025",
  description: "Portfolio profesional de Luis Santana - Full Stack Developer especializado en React, Next.js, Node.js y desarrollo web moderno. Proyectos, habilidades y experiencia en desarrollo frontend y backend.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio", "Web Developer", "Luis Santana"],
  authors: [{ name: "Luis Santana" }],
  creator: "Luis Santana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tu-dominio.com",
    title: "Luis Santana | Full Stack Developer",
    description: "Portfolio profesional de desarrollo web Full Stack",
    siteName: "Luis Santana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Santana | Full Stack Developer",
    description: "Portfolio profesional de desarrollo web Full Stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body className={inter.className}>
        <LanguageProvider>
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
        </LanguageProvider>
      </body>
    </html>
  );
}
