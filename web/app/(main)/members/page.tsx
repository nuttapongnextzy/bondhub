import { profiles } from "@/lib/placeholder-data";
import ProfileCard from "@/components/ProfileCard";

function Page() {
  return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
        <ProfileCard profile={profiles[0]} />
        <ProfileCard profile={profiles[1]} />
    </div>
  );
}

export default Page;
