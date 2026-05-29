import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-start py-50 h-full">
      <Spinner />
    </div>
  );
}
