"use client";

import { useSearchParams } from "next/navigation";

import { signInAction } from "@/app/_lib/actions";
import Button from "./components/Button";

function SignInButton() {
  const params = useSearchParams();

  return (
    <form action={() => signInAction(params.get("callbackUrl"))}>
      <Button />
    </form>
  );
}

export default SignInButton;
