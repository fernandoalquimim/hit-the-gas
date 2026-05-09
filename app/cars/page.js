import Main from "@/app/_components/Main";
import CarsList from "@/app/_components/CarsList";

function Page() {
  return (
    <Main>
      <h1 className="text-4xl mb-3 text-accent-400 font-medium">
        The road will never be the same!
      </h1>
      <p className="text-primary-200 text-lg mb-2">
        Experience the thrill of driving the world&apos;s most powerful sports
        cars. Whether you want to take the wheel yourself or sit back and enjoy
        the ride with a professional driver, we offer unforgettable
        high-performance experiences designed to get your heart racing.
      </p>
      <ul className="text-primary-200 text-lg mb-2">
        <li>🔥 Drive iconic supercars on the open road</li>
        <li>🔥 Ride as a passenger with an expert driver</li>
        <li>🔥 Feel the speed, power, and excitement up close</li>
        <li>🔥 Create memories you&apos;ll never forget</li>
      </ul>
      <p className="text-primary-200 text-lg mb-2">
        From roaring engines to breathtaking acceleration, this is your chance
        to experience pure automotive passion.
      </p>
      <p className="text-primary-200 text-lg mb-2">
        <strong>
          Book your ultimate sports car adventure today and unleash the
          excitement!
        </strong>
      </p>
      <CarsList />
    </Main>
  );
}

export default Page;
