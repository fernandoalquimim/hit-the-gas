"use client";

import { signInAction } from "@/app/_lib/actions";
import { useSearchParams } from "next/navigation";

function SignInButton() {
  const params = useSearchParams();

  return (
    <form action={() => signInAction(params.get("callbackUrl"))}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
