import Spinner from "@/app/_components/Spinner";
import Main from "@/app/_components/Main";

export default function Loading() {
  return (
    <Main>
      <div className="flex flex-col justify-start items-center py-50 h-full">
        <Spinner />
        <p>Loading cars...</p>
      </div>
    </Main>
  );
}
