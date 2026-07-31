import { signOutAction } from "@/app/_lib/actions";
import Button from "./components/Button";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button />
    </form>
  );
}

export default SignOutButton;
