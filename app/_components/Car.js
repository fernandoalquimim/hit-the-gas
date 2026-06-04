import { format } from "date-fns";
import Image from "next/image";
import {
  UsersIcon,
  CurrencyDollarIcon,
  BoltIcon,
  FireIcon,
  ChartBarIcon,
  ClockIcon,
  CalendarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import { formatCurrency } from "@/app/_utils/helpers";
import TextExpander from "./TextExpander";

function Car({ car, booking }) {
  const {
    name,
    description,
    maxCapacity,
    discount,
    image,
    hp,
    cc,
    maxSpeed,
    acc,
    brands: { name: brandName, logo: brandLogo, dimensions: brandDimensions },
  } = car;
  const [brandLogoWSize, brandLogoHSize] = brandDimensions.split("-");

  const { startDate, endDate, numDays, hasDriver, observations, numPeople } =
    booking || {};

  return (
    <div className="relative grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image src={image} fill className="object-cover" alt={name} />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 -translate-x-63.5 bg-primary-950 p-6 pb-1 w-[150%]">
          {name}
        </h3>

        <div
          className={`absolute top-2 right-2 w-${brandLogoWSize} h-${brandLogoHSize}`}
        >
          <Image
            src={brandLogo}
            alt="logo"
            fill
            className="object-cover object-center"
          />
        </div>

        {!booking ? (
          <>
            <p className="text-lg text-primary-300 mb-10">
              <TextExpander>{description}</TextExpander>
            </p>

            <ul className="grid grid-cols-2 gap-4 mb-7">
              {discount > 0 && (
                <li className="flex gap-3 items-center">
                  <CurrencyDollarIcon className="h-5 w-5 text-green-300" />
                  <span className="text-lg">
                    <span className="font-bold text-green-300">
                      Discount of {formatCurrency(discount)}
                    </span>
                  </span>
                </li>
              )}
              <li className="flex gap-3 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  For up to <span className="font-bold">{maxCapacity}</span>{" "}
                  people
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <ChartBarIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  Max speed: <span className="font-bold">{maxSpeed}</span> km/h
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <BoltIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  <span className="font-bold">{hp}</span> horsepower
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FireIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  Displacement:{" "}
                  <span className="font-bold">{cc.toFixed(1)}</span> cc
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <ClockIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  0-100 km/h: <span className="font-bold">{acc}</span> s
                </span>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-4 mb-7">
              <li className="flex gap-3 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  For <span className="font-bold">{numPeople}</span>{" "}
                  {numPeople === 1 ? "person" : "people"}{" "}
                  {hasDriver && (
                    <span className="text-accent-400">(+ driver)</span>
                  )}
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <CalendarIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  For <span className="font-bold">{numDays}</span> day
                  {numDays > 1 && "s"}
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
                <span className="text-lg">
                  {numDays > 1 ? "From " : "To "}
                  <span className="font-bold">
                    {format(new Date(startDate), "EEE, MMM dd yyyy")}
                  </span>
                </span>
              </li>

              {numDays > 1 && (
                <li className="flex gap-3 items-center">
                  <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
                  <span className="text-lg">
                    To{" "}
                    <span className="font-bold">
                      {format(new Date(endDate), "EEE, MMM dd yyyy")}
                    </span>
                  </span>
                </li>
              )}
            </ul>
            {observations && (
              <>
                <span className="text-lg">Observations:</span>
                <p className="text-lg text-primary-300 mb-10">
                  <TextExpander>{observations}</TextExpander>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Car;
