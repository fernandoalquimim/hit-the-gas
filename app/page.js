import Slideshow from "./_components/Slideshow";

function Page() {
  return (
    <div className="flex-1 grid relative">
      <Slideshow />
      <div className="absolute z-10 place-self-center text-center flex flex-col items-center gap-4 -mt-72">
        <div>
          <h1
            className="h1-homepage text-7xl"
            data-text="Give me fuel, give me fire,"
          >
            Give me fuel, give me fire,
          </h1>
        </div>
        <div>
          <h3
            className="h3-homepage text-4xl"
            data-text="give me that wich I desire!"
          >
            give me that wich I desire!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Page;
