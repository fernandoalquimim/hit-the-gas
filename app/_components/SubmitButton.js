"use client";

import { useFormStatus } from "react-dom";

import SpinnerMini from "./SpinnerMini";

function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex justify-center items-center bg-accent-500 w-52 h-15 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
      disabled={pending}
    >
      {pending ? <SpinnerMini className="mx-auto" /> : children}
    </button>
  );
}

export default SubmitButton;
