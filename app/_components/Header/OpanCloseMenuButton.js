"use client";

import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { useOutsideClick } from "@/app/_hooks/useOutsideClick";

function OpanCloseMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    const menu = document.getElementById("header-menu");
    menu.classList.remove("opacity-0");

    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    const menu = document.getElementById("header-menu");
    menu.classList.add("opacity-0");
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const ref = useOutsideClick(closeMenu);

  return (
    <button
      className="cursor-pointer md:hidden"
      onClick={handleClick}
      ref={ref}
    >
      {!isMenuOpen ? (
        <Bars3Icon className="h-10 w-10 text-primary-1450" />
      ) : (
        <XMarkIcon className="h-10 w-10 text-primary-1450" />
      )}
    </button>
  );
}

export default OpanCloseMenuButton;
