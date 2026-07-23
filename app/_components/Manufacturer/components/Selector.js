"use client";

import { useEffect, useState } from "react";

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

  function handleFilter(selected) {
    const params = new URLSearchParams(searchParams);

    params.delete("page");
    params.delete("selected");
    selected.forEach((s) => params.append("selected", s));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    setDisplayManufacturers(manufacturers);
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
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1280: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
        centerInsufficientSlides={true}
      >
        {displayManufacturers.map((m, i) => {
          const [logoWidth, logoHeight] = m.dimensions.split("-");
          return (
            <SwiperSlide key={i}>
              <label
                className="cursor-pointer"
                width={logoWidth}
                height={logoHeight}
                key={m.id}
              >
                <div className="relative flex justify-around items-center w-fit h-fit ">
                  <Image
                    src={m.logo}
                    alt="logo"
                    width={logoWidth}
                    height={logoHeight}
                    style={{ height: `${logoHeight}px` }}
                  />
                  {selectedIds.includes(m.id) && (
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-[50%] bg-[#5fa212] border border-solid border-accent-50" />
                  )}
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => {
                      let filteredIds;
                      if (!selectedIds.includes(m.id)) {
                        filteredIds = [...selectedIds, m.id];
                      } else {
                        filteredIds = selectedIds.filter((id) => id !== m.id);
                      }
                      setSelectedIds(filteredIds);
                      handleFilter(filteredIds);
                    }}
                  />
                </div>
              </label>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className={`w-fit h-fit my-auto ${selectedIds.length ? "cursor-pointer" : ""}`}
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
