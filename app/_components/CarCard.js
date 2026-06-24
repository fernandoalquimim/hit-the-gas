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
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative min-w-28">
        <Image
          src={image}
          alt={`Car ${name}`}
          fill
          className="object-cover border-r border-primary-800 select-none"
        />
      </div>

      <div className="grow max-w-md grid grid-cols-[1fr] grid-rows-[3fr_1fr]">
        <div className="relative pt-5 pb-4 pl-7 pr-3 bg-primary-950 flex flex-col justify-between gap-5">
          <div className="absolute top-3 right-2">
            <Image
              src={brandLogo}
              alt="logo"
              width={logoWidth}
              height={logoHeight}
              className="object-cover object-center"
            />
          </div>

          <div style={{ paddingRight: `${logoWidth - 4}px` }}>
            <h3 className="text-accent-500 font-semibold text-2xl md:max-lg:text-xl transition-all duration-300 ease-in-out">
              {name}
            </h3>
            <p className="text-xl md:max-lg:text-lg text-accent-50 transition-all duration-300 ease-in-out">
              {brandName}
            </p>
          </div>

          <div className="flex justify-between items-end md:max-lg:flex-col md:max-lg:items-start">
            <div className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <p className="text-lg text-primary-200">
                <span className="font-bold">{maxCapacity}</span> people
              </p>
            </div>
            <p className="flex gap-3 justify-end items-baseline">
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

        <div className="flex justify-end bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cars/${id}`}
            className="h-full w-fit flex items-center border-l border-primary-800 py-4 px-3.5 hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
