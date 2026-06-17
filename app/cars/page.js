import { Suspense } from "react";

import Main from "@/app/_components/Main";
import CarsList from "@/app/_components/CarsList";
import Spinner from "@/app/_components/Spinner";
import Manufacturer from "@/app/_components/Manufacturer/Manufacturer";

export const metadata = {
  title: "Cars",
};

function Page({ searchParams }) {
  const filter = searchParams?.selected ?? [];
  const manufacturersIds = Array.isArray(filter)
    ? filter.map((f) => parseInt(f))
    : [parseInt(filter)];

  return (
    <Main>
      <h1 className="text-4xl mb-3 text-accent-400 font-medium">
        The road will never be the same!
      </h1>
      <p className="text-primary-200 text-xl mb-10">
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

      <Manufacturer />

      <Suspense fallback={<Spinner />} key={manufacturersIds}>
        <CarsList manufacturersIds={manufacturersIds} />
      </Suspense>
    </Main>
  );
}

export default Page;
