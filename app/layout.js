import { Shrikhand, Figtree, DM_Mono } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({ weight: "400", subsets: ["latin"], variable: "--font-shrikhand" });
const figtree = Figtree({ weight: ["400", "600", "800"], subsets: ["latin"], variable: "--font-figtree" });
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dm-mono" });

export const metadata = { title: "Por que uma Creami" };

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${shrikhand.variable} ${figtree.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
