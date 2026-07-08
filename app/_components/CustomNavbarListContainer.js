"use client";

import { useOutsideClick } from "../_hooks/useOutsideClick";

function CustomNavbarListContainer({ children }) {
  const ref = useOutsideClick(() => {
    const input = document.getElementById("navbar-active");
    if (input.checked) input.click();
  });

  return (
    <div
      id="header-list"
      className="flex flex-col justify-end h-0 opacity-0 overflow-y-hidden transition-all duration-300"
      ref={ref}
    >
      {children}
    </div>
  );
}

export default CustomNavbarListContainer;
