import { Suspense } from "react";

import { getCar, getCars } from "@/app/_lib/data-services";
import Main from "@/app/_components/Main";
import Car from "@/app/_components/Car";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

export async function generateMetadata({ params }) {
  const { name } = await getCar(params.carId);
  return {
    title: name,
  };
}

export async function generateStaticParams() {
  const cars = await getCars();
  const ids = cars.map((c) => ({ carId: String(c.id) }));
  return ids;
}

async function Page({ params }) {
  const car = await getCar(params.carId);

  return (
    <Main>
      <div className="max-w-6xl mx-auto grid gap-10 min-[1032px]:gap-15 py-8 max-[1032px]:pt-0">
        <Car car={car} />

        <h2 className="text-5xl font-semibold text-center text-accent-400 min-[1032px]:mt-5">
          Reserve now. Pay once you get into the store.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation car={car} />
        </Suspense>
      </div>
    </Main>
  );
}

export default Page;
