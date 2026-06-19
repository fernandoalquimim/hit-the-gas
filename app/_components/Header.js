import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-8 py-5 absolute top-0 left-0 z-50 w-full">
      <div className="max-w-7xl relative md:flex md:justify-between md:items-center mx-auto">
        <div className="absolute md:static z-20 flex items-center gap-6">
          <Logo />
          <Bars3Icon className="h-10 w-10 text-primary-1450 md:hidden" />
          <XMarkIcon className="h-10 w-10 text-primary-1450 hidden" />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
