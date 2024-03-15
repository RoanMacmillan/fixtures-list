import Image from "next/image";
import { Inter } from "next/font/google";
import Fixtures from "./fixtures";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {


  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-slate-100 justify-between ${inter.className}`}
    >
     
    <Fixtures />
     
    </main>
  );
}
