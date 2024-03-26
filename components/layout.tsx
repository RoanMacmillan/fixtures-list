import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center bg-slate-100 justify-between  ${inter.className}`}>{children}</main>
    </>
  );
}
