import { MyProfileForm } from "@/components/MyProfileForm";
import { profiles } from "@/lib/placeholder-data";

function Page() {
  const profile = profiles[0];

  return (
    <div className="flex items-center justify-center">
      <div className="p-10">
        <MyProfileForm profile={profile} />
      </div>
    </div>
  );
}

export default Page;
