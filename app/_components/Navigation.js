import Link from "next/link";
import { auth } from "@/app/_lib/auth";

async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl text-white absolute md:static max-w-md md:max-w-full w-full md:w-fit -top-2 rounded-xl bg-[rgba(0,0,0,0.20)] md:bg-transparent">
      <ul className="flex flex-col md:flex-row backdrop-blur-xl md:backdrop-blur-none gap-12 items-center pt-32 pb-7 md:p-0 rounded-xl shadow-[0_0_3.2rem_0.1rem_rgba(0,0,0,1)] md:shadow-none">
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
              className="hover:text-primary-1450 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span className="md:max-[64rem]:hidden">{session.user.name}</span>
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
  );
}

export default Navigation;
