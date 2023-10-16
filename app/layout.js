import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DD Beats Store",
  description: "An online store for electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
