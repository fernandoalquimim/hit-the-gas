import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { auth } from "@/app/_lib/auth";
import Logo from "./Logo";
import CustomNavbarLink from "./CustomNavbarLink";
import CustomNavbarListContainer from "./CustomNavbarListContainer";

import "@/app/_styles/header.css";

async function SmallNavigation() {
  const session = await auth();

  return (
    <header className="px-8 py-5 absolute top-0 left-0 z-50 w-full md:hidden">
      <div
        id="header-content"
        className="px-3 py-2 w-full rounded-md transition-all duration-300 flex flex-col gap-2"
      >
        <div className="flex justify-between items-center">
          <Logo />
          <input type="checkbox" id="navbar-active" className="hidden" />
          <label
            htmlFor="navbar-active"
            className="cursor-pointer"
            id="label-menu"
          >
            <Bars3Icon className="h-10 w-10 text-primary-1450" />
          </label>
          <label className="cursor-pointer hidden" id="label-close">
            <XMarkIcon className="h-10 w-10 text-primary-1450" />
          </label>
        </div>
        <CustomNavbarListContainer>
          <ul className="flex flex-col gap-12 items-center text-xl my-auto">
            <li>
              <CustomNavbarLink
                href="/cars"
                classes="hover:text-primary-1450 transition-colors"
              >
                Cars
              </CustomNavbarLink>
            </li>
            <li>
              <CustomNavbarLink
                href="/about"
                classes="hover:text-primary-1450 transition-colors"
              >
                About
              </CustomNavbarLink>
            </li>
            <li>
              {session?.user?.image ? (
                <CustomNavbarLink
                  href="/account"
                  classes="hover:text-primary-1450 transition-colors flex items-center gap-2"
                >
                  <img
                    className="h-8 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                  />
                  <span>{session.user.name}</span>
                </CustomNavbarLink>
              ) : (
                <CustomNavbarLink
                  href="/login"
                  classes="hover:text-primary-1450 transition-colors"
                >
                  Client area
                </CustomNavbarLink>
              )}
            </li>
          </ul>
        </CustomNavbarListContainer>
      </div>
    </header>
  );
}

export default SmallNavigation;
