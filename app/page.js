import Link from "next/link";

import Slideshow from "./_components/Slideshow/Slideshow";
import TextSlide from "./_components/TextSlide";
import HeaderOverlay from "./_components/Header/HeaderOverlay";

function Page() {
  return (
    <div className="flex-1 grid relative">
      <HeaderOverlay />
      <Slideshow />
      <div className="absolute z-10 justify-self-center top-60 text-center flex flex-col items-center gap-4 sliding-div">
        <div className="block xl:hidden">
          <h1
            className="rubik-upper-shadow title-gratient-bg max-[500px]:text-5xl text-6xl sm:text-7xl leading-[normal] transition-all duration-300"
            data-text="give me fuel,"
          >
            give me fuel,
          </h1>
          <div className="w-fit mx-auto">
            <h1
              className="rubik-upper-shadow title-gratient-bg max-[500px]:text-5xl text-6xl sm:text-7xl leading-[normal] transition-all duration-300"
              data-text="give me fire,"
            >
              give me fire,
            </h1>
          </div>
        </div>
        <div className="block max-xl:hidden">
          <h1
            className="rubik-upper-shadow title-gratient-bg text-7xl"
            data-text="Give me fuel, give me fire,"
          >
            Give me fuel, give me fire,
          </h1>
        </div>
        <div>
          <h3
            className="rubik-upper-shadow subtitle-gratient-bg max-[500px]:text-xl text-3xl sm:text-4xl transition-all duration-300"
            data-text="give me that wich I desire!"
          >
            give me that wich I desire!
          </h3>
        </div>
        <div className="mt-8">
          <Link
            href="/cars"
            className="bg-primary-1450 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-primary-1550 transition-all duration-200"
          >
            Explore iconic supercars
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-6 z-10 left-1/2 -translate-x-1/2">
        <div className="hidden lg:flex justify-center items-center">
          <TextSlide />
        </div>
      </footer>
    </div>
  );
}

export default Page;
