import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-cover bg-center bg-no-repeat md:bg-[url('/bg2.png')]">
      <Hero />
    </main>
  );
}
