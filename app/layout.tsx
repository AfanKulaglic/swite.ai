'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  const isTemplatePage = pathname?.startsWith('/templates/');

  return (
    <html lang="en">
      <head>
        <title>SWITE.AI - AI Website Builder</title>
        <meta name="description" content="Build modern, production-ready websites using AI — no designers, no developers." />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {!isStudioPage && !isAuthPage && !isTemplatePage && <Navbar />}
          <main className="relative z-10">{children}</main>
          {!isStudioPage && !isAuthPage && !isTemplatePage && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
