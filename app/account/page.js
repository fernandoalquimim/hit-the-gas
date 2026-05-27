import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Client area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <div className="self-center flex flex-col items-center gap-7">
      <div className="flex items-center">
        <img
          referrerPolicy="no-referrer"
          className="h-56 rounded-full"
          src={session?.user?.image}
          alt={session?.user?.name}
        />
      </div>
      <h2 className="font-semibold text-6xl text-accent-400 mb-10">
        Welcome, {firstName}!
      </h2>
      <Link
        href="/cars"
        className="bg-primary-1450 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-primary-1550 transition-all w-fit"
      >
        Explore iconic supercars
      </Link>
    </div>
  );
}
