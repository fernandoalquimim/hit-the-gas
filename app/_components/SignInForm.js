"use client";

import { useSearchParams } from "next/navigation";

import { signInAction } from "@/app/_lib/actions";
import SignInButton from "./SignInButton";

function SignInForm() {
  const params = useSearchParams();

  return (
    <form action={() => signInAction(params.get("callbackUrl"))}>
      <SignInButton />
    </form>
  );
}

export default SignInForm;
