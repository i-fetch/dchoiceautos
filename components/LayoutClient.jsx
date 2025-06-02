"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import { usePathname } from "next/navigation";
import "animate.css/animate.compat.css";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const authRoutes = ["/login", "/signup", "/dashboard","/dashboard/car-update","/dashboard/spare-parts"];
  const isAuthPage = authRoutes.includes(pathname);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        {!isAuthPage && <Navbar />}
        <main className="flex-1">{children}</main>
        {!isAuthPage && <Footer />}
      </div>
    </ThemeProvider>
  );
}
