'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/auth/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith('/studio');
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <html lang="en">
      <head>
        <title>SWITE.AI - AI Website Builder</title>
        <meta name="description" content="Build modern, production-ready websites using AI — no designers, no developers." />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {/* Global Animated Background */}
          {!isStudioPage && !isAuthPage && <AnimatedBackground />}
          
          {!isStudioPage && !isAuthPage && <Navbar />}
          <main className="relative z-10">{children}</main>
          {!isStudioPage && !isAuthPage && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
