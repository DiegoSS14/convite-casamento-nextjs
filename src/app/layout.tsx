import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convite de Casamento | Kellen & Diego",
  description: "Celebre este momento especial conosco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAF7F2] text-[#3D352E] selection:bg-[#E2D5C3] selection:text-[#2E2824]">
        {children}
      </body>
    </html>
  );
}
