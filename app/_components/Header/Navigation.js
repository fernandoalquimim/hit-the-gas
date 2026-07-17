import Link from "next/link";

import Logo from "./Logo";
import { auth } from "@/app/_lib/auth";

async function Navigation() {
  const session = await auth();
  return (
    <header className="py-5 absolute top-0 left-0 z-50 w-full max-md:hidden">
      <div className="px-8 py-2 flex justify-between items-center max-w-7xl mx-auto gap-8 @container/navbar-container">
        <Logo />
        <nav className="z-10 text-xl py-1.5 text-white max-w-95 w-fit">
          <ul className="flex gap-7 items-center justify-end">
            <li>
              <Link
                href="/cars"
                className="hover:text-primary-1450 transition-colors"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary-1450 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  className="hover:text-primary-1450 transition-colors flex items-center gap-2"
                >
                  <img
                    className="h-8 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                  />
                  <span className="max-w-50 w-full hidden @min-[762px]/navbar-container:inline">
                    {session.user.name}
                  </span>
                  <span className="max-w-50 w-full hidden @max-[762px]/navbar-container:inline">
                    {session.user.name.split(" ")[0]}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="hover:text-primary-1450 transition-colors"
                >
                  Client area
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
