import { Suspense } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-8 py-5 absolute top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        {/* <Suspense fallback={null}> */}
        <Navigation />
        {/* </Suspense> */}
      </div>
    </header>
  );
}

export default Header;
