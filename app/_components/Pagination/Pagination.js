"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { carsPerPage } from "@/app/_utils/constants/global";

function Pagination({ totalItems }) {
  const [activePage, setActivePage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pages = Array.from(
    { length: Math.ceil(totalItems / carsPerPage) },
    (_, i) => i + 1,
  );
  const displayedPageNumHeight = 32;

  function handlePagination(newPage) {
    setActivePage(newPage);

    const params = new URLSearchParams(searchParams);

    params.delete("page");
    params.append("page", newPage);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex w-fit gap-12">
        <button
          className={`w-8 ${activePage > 1 ? "cursor-pointer" : ""}`}
          onClick={() => handlePagination(activePage - 1)}
          disabled={activePage === 1}
        >
          <ChevronLeftIcon
            className={`${activePage === 1 ? "text-primary-800" : "text-accent-400"} `}
          />
        </button>

        <div className="flex items-center gap-2 text-base">
          <span>Page</span>
          <div className="h-8 w-8 overflow-hidden bg-accent-400 rounded-sm">
            <div
              className="flex flex-col h-8 transition-transform duration-200 ease-in-out"
              style={{
                transform: `translateY(-${(activePage - 1) * displayedPageNumHeight}px)`,
              }}
            >
              {pages.map((item, index) => (
                <div
                  key={index}
                  className="flex h-8 w-full items-center justify-center text-primary-800 leading-8"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <span>of</span>
          <span>{pages.length}</span>
        </div>

        <button
          className={`w-8 ${activePage < pages.length ? "cursor-pointer" : ""}`}
          onClick={() => handlePagination(activePage + 1)}
          disabled={activePage === pages.length}
        >
          <ChevronRightIcon
            className={`${activePage === pages.length ? "text-primary-800" : "text-accent-400"} `}
          />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
