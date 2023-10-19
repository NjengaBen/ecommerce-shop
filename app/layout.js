import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer, Providers } from "@/components";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DD Beats Store",
  description: "An online store for electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <Providers>
          <header>
            <Navbar />
          </header>
          <Toaster />
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
