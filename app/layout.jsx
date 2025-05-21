import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import "animate.css/animate.compat.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AutoElite - Premium Cars & Parts",
  description: "Your one-stop destination for premium cars, spare parts, and reliable shipping services.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
