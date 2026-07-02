import { auth } from "@/app/_lib/auth";
import { getClient } from "@/app/_lib/data-services";
import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

async function Page() {
  const session = await auth();
  const client = await getClient(session.user.email);

  return (
    <div className="pb-8">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your profile
      </h2>
      <p className="text-lg mb-8 text-primary-200 text-justify">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm client={client}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={client.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
