import Spinner from "@/app/_components/Spinner";
import Main from "@/app/_components/Main";

export default function Loading() {
  return (
    <Main>
      <div className="grid justify-center items-center">
        <Spinner />
        <p>Loading cars...</p>
      </div>
    </Main>
  );
}
