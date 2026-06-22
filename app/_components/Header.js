import Logo from "./Logo";
import OpanCloseMenuButton from "./Header/OpanCloseMenuButton";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-8 py-5 absolute top-0 left-0 z-50 w-full">
      <div className="max-w-7xl relative md:flex md:justify-between md:items-center mx-auto">
        <div className="absolute justify-self-center md:static z-20 flex items-center gap-6">
          <Logo />
          <OpanCloseMenuButton />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
