import Link from "next/link";

import Main from "@/app/_components/Main";

export default function Page() {
  return (
    <Main>
      <div className="flex justify-center items-center h-full">
        <div className="text-center space-y-6 mt-4">
          <h1 className="text-3xl font-semibold">
            Thank you for your reservation!
          </h1>
          <Link
            href=""
            className="underline text-xl text-accent-500 inline-block"
          >
            Manage your reservations &rarr;
          </Link>
        </div>
      </div>
    </Main>
  );
}
