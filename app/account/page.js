import { auth } from "@/app/_lib/auth";
import SignOutButton from "@/app/_components/SignOutButton";
import Main from "@/app/_components/Main";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <Main>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}!
        <SignOutButton />
      </h2>
    </Main>
  );
}
