import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('/bg.png')` }}
      className="h-screen bg-cover bg-center"
    >
      <Hero />
    </main>
  );
}
