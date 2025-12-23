import Image from "next/image";
import logo from "@/public/logo.png";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 flex item-center justify-between w-full py-6 px-48">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Logo do Vivance Incorporadora" height={40} />
        <span className="text-2xl text-text-inverse">
          Vivance Incorporadora
        </span>
      </div>

      <ul className="text-text-inverse flex items-center gap-8">
        <li>Steel Frame</li>
        <li>Benefícios</li>
        <li>Contato</li>
        <li>Catálogo de projetos</li>
        <li>Processo</li>
        <li>Outros serviços</li>
      </ul>
    </header>
  );
}
