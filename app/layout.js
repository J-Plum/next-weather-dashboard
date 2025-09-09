"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "weather dashboard",
  description: "Next.js로 만든 간단한 날씨 대시보드",
};
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <QueryClientProvider client={queryClient}>
          <main className="flex-grow">{children}</main>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
