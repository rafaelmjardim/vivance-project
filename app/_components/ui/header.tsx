"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { menuArray } from "@/app/constants/menu";
import { MenuSheet } from "./menuSheet";
import { scrollSection } from "@/app/_utils/utils";

export function Header() {
  return (
    <header className="py-6 px-4 container sm:px-24 mx-auto absolute z-20 top-0 left-0 right-0 flex items-center justify-between w-full">
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
          <li key={index}>
            <button
              onClick={() => scrollSection(menu?.sectionId)}
              className="cursor-pointer transition-all hover:text-text-active"
            >
              {menu.txt}
            </button>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <MenuSheet />
      </div>
    </header>
  );
}
