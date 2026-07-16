import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CarCard({ car }) {
  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    brands: { name: brandName, logo: brandLogo, dimensions: brandDimensions },
  } = car;
  const [logoWidth, logoHeight] = brandDimensions.split("-");

  return (
    <div className="flex border-primary-800 border @container/card">
      <div className="flex @max-[413px]/card:flex-col w-full justify-between">
        <div className="relative flex min-w-28 grow h-28 @min-[413px]/card:h-full">
          <Image
            src={image}
            alt={`Car ${name}`}
            fill
            className="object-cover border-r border-primary-800 select-none"
          />
        </div>

        <div className="grow grid grid-cols-[1fr] grid-rows-[3fr_1fr] max-w-100 w-full">
          <div className="p-3.5 flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl text-accent-500">
                  {name}
                </h3>
                <p className="text-xl text-accent-50">{brandName}</p>
              </div>

              <Image
                src={brandLogo}
                alt="logo"
                width={logoWidth}
                height={logoHeight}
              />
            </div>

            <div className="flex justify-between items-end">
              <div className="flex gap-3 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600" />
                <p className="text-lg text-primary-200">
                  <span className="font-bold">{maxCapacity}</span> people
                </p>
              </div>
              <p className="flex gap-1 justify-end items-baseline">
                {discount > 0 ? (
                  <>
                    <span className="text-3xl font-[350] text-green-300">
                      ${regularPrice - discount}
                    </span>
                    <span className="line-through font-semibold text-primary-600">
                      ${regularPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-[350]">${regularPrice}</span>
                )}
                <span className="text-primary-200">/ day</span>
              </p>
            </div>
          </div>

          <div className="flex justify-end text-right border-t border-t-primary-800">
            <Link
              href={`/cars/${id}`}
              className="h-full w-fit flex items-center border-l border-primary-800 py-4 px-3.5 hover:bg-accent-600 transition-all hover:text-primary-900"
            >
              Details & reservation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
