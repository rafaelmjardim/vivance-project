import Image from "next/image";
import logo from "@/public/logo.png";
import { HiMiniBars3 } from "react-icons/hi2";

type Menu = {
  txt: string;
  href: string;
};

export function Header() {
  const menuArray: Menu[] = [
    { txt: "Steel Frame", href: "steel-frame" },
    { txt: "Benefícios", href: "beneficios" },
    { txt: "Contato", href: "contato" },
    { txt: "Catálogo de projetos", href: "catalogo-de-projetos" },
    { txt: "Processos", href: "processo" },
    { txt: "Outros serviços", href: "outros-servicos" },
  ];
  return (
    <header className="py-6 px-4 container sm:px-24 mx-auto absolute z-10 top-0 left-0 right-0 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Image
          className="w-auto h-8 sm:h-10"
          src={logo}
          alt="Logo do Vivance Incorporadora"
        />
        <span className="inline-flex lg:hidden xl:inline-flex text-lg lg:text-2xl text-text-inverse">
          Vivance Incorporadora
        </span>
      </div>

      <ul className="hidden lg:inline-flex tems-center text-text-inverse gap-8">
        {menuArray.map((menu, index) => (
          <li
            key={index}
            className="cursor-pointer transition-all hover:text-text-active"
          >
            {menu.txt}
          </li>
        ))}
      </ul>

      <HiMiniBars3
        className="lg:hidden"
        color="var(--color-icon-inverse)"
        size={24}
      />
    </header>
  );
}
