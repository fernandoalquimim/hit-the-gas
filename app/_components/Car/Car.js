import { Suspense } from "react";
import Image from "next/image";
import { format } from "date-fns";
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
import TextExpander from "../TextExpander";
import CarCarousel from "./CarCarousel";

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
  const [logoWidth, logoHeight] = brandDimensions.split("-");
  const logoWidthMini = (logoWidth / 3) * 2;
  const logoHeightMini = (logoHeight / 3) * 2;

  const { startDate, endDate, numDays, hasDriver, observations, numPeople } =
    booking || {};

  const editMode = !!booking;

  return (
    <div className="border border-primary-800 @container/car">
      <div className="relative grid grid-cols-1 @min-[951px]/car:grid-cols-[3fr_4fr] gap-6 @min-[951px]/car:gap-12">
        <div className="relative w-full h-[50dvh] @min-[951px]/car:w-106 @min-[951px]/car:h-full @min-[951px]/car:max-h-[80dvh] @min-[951px]/car:scale-[1_1.10] @min-[951px]/car:-translate-x-3 transition-all duration-300">
          {editMode ? (
            <Image src={image} fill className="object-cover" alt={name} />
          ) : (
            <Suspense
              fallback={
                <Image src={image} fill className="object-cover" alt={name} />
              }
            >
              <CarCarousel car={car} />
            </Suspense>
          )}
          <div className="z-10 absolute top-0 left-0 flex bg-primary-950 px-4 py-2 gap-5 max-w-[95%] @min-[574px]/car:hidden">
            <Image
              src={brandLogo}
              alt="logo"
              width={logoWidthMini}
              height={logoHeightMini}
              style={{
                minWidth: logoWidthMini,
                maxWidth: logoWidthMini,
                minHeight: logoHeightMini,
                maxHeight: logoHeightMini,
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <div className="flex flex-col justify-center gap-0.5">
              <div className="text-2xl font-black text-accent-100">{name}</div>
              <div className="text-xl font-extrabold text-accent-400">
                {brandName}
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 absolute top-3 @max-[951px]/car:-left-px @min-[951px]/car:right-0 flex bg-primary-950 px-4 py-2 gap-5 max-w-[95%] @max-[574px]/car:hidden">
          <Image
            src={brandLogo}
            alt="logo"
            width={logoWidth}
            height={logoHeight}
            className="@min-[951px]/car:hidden"
            style={{
              minWidth: logoWidth,
              maxWidth: logoWidth,
              minHeight: logoHeight,
              maxHeight: logoHeight,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />

          <div className="flex flex-col @max-[951px]/car:items-start justify-center gap-2">
            <div className="text-5xl @min-[951px]/car:text-6xl @min-[951px]/car:text-right font-black text-accent-100">
              {name}
            </div>
            <div className="text-3xl @min-[951px]/car:text-right font-extrabold text-accent-400">
              {brandName}
            </div>
          </div>

          <Image
            src={brandLogo}
            alt="logo"
            width={logoWidth}
            height={logoHeight}
            className="hidden @min-[951px]/car:block"
            style={{
              minWidth: logoWidth,
              maxWidth: logoWidth,
              minHeight: logoHeight,
              maxHeight: logoHeight,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </div>

        <div className="px-4 @min-[951px]/car:pt-48">
          {!editMode ? (
            <>
              <p className="text-lg text-justify text-primary-300 mb-10">
                <TextExpander>{description}</TextExpander>
              </p>

              <ul className="grid grid-cols-1 @min-[479px]/car:grid-cols-2 w-fit @min-[479px]/car:w-full mx-auto @min-[479px]/car:justify-around gap-4 mb-7">
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
                    Max speed: <span className="font-bold">{maxSpeed}</span>{" "}
                    km/h
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
              <ul className="grid grid-cols-1 gap-4 mb-7">
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
                  <p className="text-lg text-primary-300 mb-10 text-justify">
                    <TextExpander>{observations}</TextExpander>
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Car;
