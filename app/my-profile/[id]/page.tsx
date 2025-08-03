import { MyProfileForm } from "@/components/MyProfileForm";
import { profiles } from "@/lib/placeholder-data";

function Page() {
  const profile = profiles[0];

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div>
        <MyProfileForm profile={profile} />
      </div>
    </div>
  );
}

export default Page;
