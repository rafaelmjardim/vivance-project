import { Header } from "./ui/header";

export function Hero() {
  return (
    <section className="flex items-center h-screen bg-gray-950 px-48">
      <Header />

      <article className="block">
        <h1 className="text-text-inverse text-6xl max-w-150">
          Construção Moderna em Steel Frame
        </h1>
      </article>
    </section>
  );
}
