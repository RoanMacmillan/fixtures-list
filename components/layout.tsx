import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
 
export default function Layout({ children }) {
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center bg-slate-100 justify-between  ${inter.className}`}>{children}</main>
    </>
  )
}