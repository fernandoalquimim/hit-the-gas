"use client";

import { useFormStatus } from "react-dom";

import SpinnerMini from "./SpinnerMini";

function SignInButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium transition-all duration-200 ${!pending ? "cursor-pointer hover:scale-110" : "cursor-not-allowed"}`}
      disabled={pending}
    >
      {!pending ? (
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
      ) : (
        <SpinnerMini />
      )}
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
