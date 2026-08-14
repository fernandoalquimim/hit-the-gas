import SignInButton from "@/app/_components/SignIn/SignInButton";
import Main from "@/app/_components/Main";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <Main>
      <div className="flex flex-col justify-start items-center h-full py-40 gap-5">
        <h2 className="text-3xl max-sm:text-2xl text-center font-semibold transition-all duration-300">
          Sign in to access your client area
        </h2>

        <SignInButton />
      </div>
    </Main>
  );
}
