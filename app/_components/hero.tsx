import Image from "next/image";
import { Header } from "./ui/header";
import heroBackground from "@/public/home-backgorund.jpg";
import { Button } from "./ui/button";

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

      <article className="grid gap-6 z-10 max-w-150">
        <h1 className="text-text-inverse text-6xl">
          Construção Moderna em Steel Frame
        </h1>

        <p className="text-text-inverse-secundary text-sm leading-6">
          Rapidez, sustentabilidade e qualidade superior. Transforme seu projeto
          em realidade com a tecnologia mais avançada em construção civil.
        </p>

        <div className="flex items-center gap-4">
          <Button>Solicitar orçamento</Button>
          <Button isTransparent={true}>Ver catálogo</Button>
        </div>
      </article>
    </section>
  );
}
