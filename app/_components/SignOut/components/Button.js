"use client";

import { useFormStatus } from "react-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import SpinnerMini from "@/app/_components/SpinnerMini";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`py-3 px-5 hover:bg-primary-900 text-red-400 transition-colors flex items-center gap-4 font-semibold w-full h-13 ${!pending ? "cursor-pointer" : "cursor-not-allowed"}`}
      disabled={pending}
    >
      {!pending ? (
        <>
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-400" />
          <span className="hidden lg:inline">Sign out</span>
        </>
      ) : (
        <div className="mx-auto">
          <SpinnerMini />
        </div>
      )}
    </button>
  );
}

export default Button;
