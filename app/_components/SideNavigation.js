"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/solid";

import SignOutButton from "./SignOut/SignOutButton";

const navLinks = [
  {
    name: "My account",
    href: "/account",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="max-[500px]:border-b min-[500px]:border-r border-primary-900 h-full">
      <ul className="flex min-[500px]:flex-col h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`h-13 py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${pathname === link.href ? "bg-primary-900" : ""}`}
              href={link.href}
            >
              {link.icon}
              <span className="hidden lg:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="max-[500px]:ml-auto min-[500px]:mt-auto min-[500px]:mb-4">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
