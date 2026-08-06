import { Suspense } from "react";

import Main from "@/app/_components/Main";
import CarsList from "@/app/_components/Car/CarsList";
import Spinner from "@/app/_components/Spinner";
import Manufacturer from "@/app/_components/Manufacturer/Manufacturer";

export const revalidate = 0;

export const metadata = {
  title: "Cars",
};

function Page({ searchParams }) {
  const filter = searchParams?.selected ?? [];
  const manufacturersIds = Array.isArray(filter)
    ? filter.map((f) => parseInt(f))
    : [parseInt(filter)];

  const page = searchParams?.page ?? 1;

  const reducedParams =
    manufacturersIds.reduce((acc, cur) => acc + cur, 0) + Number(page);

  return (
    <Main>
      <h1 className="max-[426px]:text-xl text-4xl mb-3 text-accent-400 font-medium max-md:text-center transition-all duration-300 ease-in-out">
        The road will never be the same!
      </h1>
      <p className="text-primary-200 text-md mb-3.5 text-justify max-sm:hidden">
        Experience the thrill of driving the world&apos;s most powerful cars.
        Whether you want to take the wheel yourself or sit back and enjoy the
        ride with a professional driver, we offer unforgettable high-performance
        experiences designed to get your heart racing. From roaring engines to
        breathtaking acceleration, this is your chance to experience pure
        automotive passion.{" "}
        <strong>
          Book your ultimate car adventure today and unleash the excitement!
        </strong>
      </p>

      <Manufacturer selected={manufacturersIds} />

      <Suspense fallback={<Spinner />} key={reducedParams}>
        <CarsList manufacturersIds={manufacturersIds} page={page} />
      </Suspense>
    </Main>
  );
}

export default Page;
