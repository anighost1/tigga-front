import { Inter } from "next/font/google";
import "./globals.css";
import QueryWrapper from "@/providers/QueryWrapper.js";
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tigga",
  description: "Tigga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <QueryWrapper>
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
