import Link from "next/link";
import { auth } from "@/app/_lib/auth";

async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl px-4 py-1.5 text-white">
      <ul className="flex gap-16 items-center">
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
              <span>{session.user.name}</span>
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
