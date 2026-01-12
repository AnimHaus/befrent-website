import "@/app/globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "She Chooses. He Commits. The Date Happens.",
  description:
    "A bold blind dating app where women choose, commitment is guaranteed, and real dates actually happen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 1. dark bg on body prevents white flashes 
        2. relative positioning for header overlaying
      */}
      <body className="bg-[#050505] text-foreground antialiased relative min-h-screen">
        <Header />
        {/* By not adding padding-top here, your Hero section 
           will start at Y=0, showing through the transparent header.
        */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}