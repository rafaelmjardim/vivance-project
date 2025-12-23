import Image from "next/image";
import { Header } from "./ui/header";
import heroBackground from "@/public/home-backgorund.jpg";

export function Hero() {
  return (
    <section className="relative flex items-center h-screen bg-gray-950 px-48">
      <Header />

      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Plano de fundo Steel Frame"
          className="w-full h-screen object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <article className="block z-10">
        <h1 className="text-text-inverse text-6xl max-w-150">
          Construção Moderna em Steel Frame
        </h1>
      </article>
    </section>
  );
}
