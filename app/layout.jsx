import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dchoiceautos - Premium Cars & Parts",
  description: "Your one-stop destination for premium cars, spare parts, and reliable shipping services.",
  icons: {
    icon: "/autos-2.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/autos-2.jpg" />
      </Head>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
        <Toaster />
      </body>
    </html>
  );
}
