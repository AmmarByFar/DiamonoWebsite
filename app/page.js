import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('/bg2.png')` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <Hero />
    </main>
  );
}
