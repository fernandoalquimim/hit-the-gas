import Image from "next/image";
import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/24/solid";

import Main from "@/app/_components/Main";
import linkedinLogo from "@/public/InBug-White.png";

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <Main>
      <h1 className="max-sm:text-3xl text-4xl text-center text-accent-400 font-medium transition-all duration-300">
        Hit the Gas?! What exactly is this company?
      </h1>

      <h1 className="max-sm:text-3xl text-4xl text-center mb-8 text-accent-400 font-medium transition-all duration-300">
        Where can I pick up those cars?
      </h1>

      <div className="max-sm:text-base text-lg text-justify space-y-8 mb-8 transition-all duration-300">
        <p>
          Well... if you got to this website without any previous knowledge,
          this is a website made with the purpose of just be part of a
          portfolio. I&apos;m sorry to inform you this but this company
          doesn&apos;t exist. So, there is no cars at all! But who knows?! Maybe
          in the future! =)
        </p>

        <p>
          Hi! My name is Fernando Alquimim. I am a software engineer and you are
          more than welcome to stay in here and explore this website, specially
          if you are also a software engineer and want to know how this website
          was done, the techniques and technology stack behind this system. In
          case you are interested in checking out the code of this website, you
          can access my GitHub repository page:
        </p>

        <Link
          href="https://github.com/fernandoalquimim/hit-the-gas"
          target="_blank"
          rel="noopener noreferrer"
          className="block wrap-anywhere text-accent-400 hover:underline"
        >
          https://github.com/fernandoalquimim/hit-the-gas
        </Link>

        <p>
          If you want to get in touch to send me any input, any idea, ask me any
          question, share any knowledge, or let me know about any possible bug
          that you might have found, you can reach me in any of these links
          bellow:
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              src={linkedinLogo}
              quality={100}
              alt="LinkedIn"
              style={{ width: 28, height: 28 }}
            />
            <Link
              href="https://www.linkedin.com/in/fernando-alquimim/"
              target="_blank"
              rel="noopener noreferrer"
              className="block wrap-anywhere text-accent-400 hover:underline"
            >
              https://www.linkedin.com/in/fernando-alquimim/
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <AtSymbolIcon className="h-7 w-7" />
            <Link
              href="mailto:fernando.freire.alquimim@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block wrap-anywhere text-accent-400 hover:underline"
            >
              fernando.freire.alquimim@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 mb-8">
        <h2 className="text-2xl text-center font-medium">
          With all that being said, feel free to explore this website!
        </h2>
        <Link
          href="/cars"
          className="bg-primary-1450 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-primary-1550 transition-all"
        >
          Explore iconic supercars
        </Link>
      </div>
    </Main>
  );
}
