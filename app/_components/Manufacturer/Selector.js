"use client";

import { useEffect, useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "@/app/_styles/manufacturerSelector.css";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function Selector({ manufacturers, selected }) {
  const [displayManufacturers, setDisplayManufacturers] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function parseManufacturersArray(orderingManufacturers) {
    const arr = [];
    const totalPerPage = 6;
    for (
      let i = 0;
      i < Math.ceil(orderingManufacturers.length / totalPerPage);
      i++
    ) {
      arr.push(
        orderingManufacturers.slice(
          i * totalPerPage,
          i * totalPerPage + totalPerPage,
        ),
      );
    }
    return arr;
  }

  function handleFilter(selected) {
    const params = new URLSearchParams(searchParams);

    params.delete("selected");
    selected.forEach((s) => params.append("selected", s));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    setDisplayManufacturers(parseManufacturersArray(manufacturers));
  }, [manufacturers]);

  useEffect(() => {
    setSelectedIds(selected);
  }, [selected]);

  return (
    <div className="flex flex-row justify-between">
      <div className="relative w-10 flex justify-start items-center">
        {!!selectedIds.length && (
          <div className="absolute top-3 -right-0.5 w-6 h-6 rounded-[50%] bg-[#5fa212] border border-solid border-accent-50 flex justify-center items-center text-accent-50 text-sm cursor-default">
            {selectedIds.length}
          </div>
        )}
        <AdjustmentsHorizontalIcon className="w-7 h-7 text-primary-600" />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="w-[92%]">
        {displayManufacturers.map((l, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-around items-center w-full h-full">
              {l.map((c) => {
                const [logoWidth, logoHeight] = c.originalDimensions.split("-");
                return (
                  <label className="cursor-pointer" key={c.id}>
                    <div className="relative flex justify-around items-center w-fit h-fit ">
                      <Image
                        src={c.logo}
                        alt="logo"
                        width={logoWidth}
                        height={logoHeight}
                        style={{ height: `${logoHeight}px` }}
                      />
                      {selectedIds.includes(c.id) && (
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-[50%] bg-[#5fa212] border border-solid border-accent-50" />
                      )}
                      <input
                        type="checkbox"
                        className="hidden"
                        onChange={() => {
                          let filteredIds;
                          if (!selectedIds.includes(c.id)) {
                            filteredIds = [...selectedIds, c.id];
                          } else {
                            filteredIds = selectedIds.filter(
                              (id) => id !== c.id,
                            );
                          }
                          setSelectedIds(filteredIds);
                          handleFilter(filteredIds);
                        }}
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="cursor-pointer w-fit h-fit my-auto"
        title="Clear filters"
        onClick={() => {
          setSelectedIds([]);
          handleFilter([]);
        }}
        disabled={!selectedIds.length}
      >
        <XMarkIcon
          className={`w-7 h-7 ${!selectedIds.length ? "text-primary-800" : "text-primary-600"}`}
        />
      </button>
    </div>
  );
}

export default Selector;
