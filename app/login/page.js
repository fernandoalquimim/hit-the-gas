import SignInForm from "@/app/_components/SignInForm";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your client area
      </h2>

      <SignInForm />
    </div>
  );
}
