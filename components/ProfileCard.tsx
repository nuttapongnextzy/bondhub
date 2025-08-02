import { Profile } from "@/lib/profile";

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-black">
    <img
      src={profile.profileImage}
      className="w-full rounded mb-2"
    />
    <div className="font-bold text-lg">{profile.email}</div>
    <div className="text-lg">
      {profile.firstName} {profile.lastName}{" "}
      {profile.nickname ? `(${profile.nickname})` : ""}
    </div>
    <div>Bio: {profile.bio}</div>
    <div>Status: {profile.status}</div>
  </div>
);

export default ProfileCard;
