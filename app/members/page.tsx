import { Profile } from "@/lib/profile";
import ProfileCard from "@/components/ProfileCard";

function Page() {
  const profile1: Profile = {
    email: "nuttapong.p@nextzy.com",
    firstName: "Nuttapong",
    lastName: "Phisitbutr",
    nickname: "Nut",
    bio: "Rookie Web Dev",
    status: "Happy",
    profileImage: "https://api.dicebear.com/7.x/personas/svg?seed=Steven",
  };

  const profile2: Profile = {
    email: "leomessi@nextzy.com",
    firstName: "Lionel",
    lastName: "Messi",
    nickname: "",
    bio: "Footballer",
    status: "Happy",
    profileImage: "https://api.dicebear.com/7.x/personas/svg?seed=John",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
      <ProfileCard profile={profile1} />
      <ProfileCard profile={profile2} />
    </div>
  );
}

export default Page;
