import { Profile } from "@/lib/definitions";

interface props {
  profile: Profile;
}

const ProfileCard = ({ profile }: props) => (
  <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-black">
    <div className="">
      <img
        src={profile.profileImage}
        className="w-30 h-30 rounded-full mx-auto mb-2"
      />
    </div>

    <div className="font-bold text-lg text-center">{profile.email}</div>
    <div className="text-lg text-center">
      {profile.firstName} {profile.lastName}{" "}
      {profile.nickname ? `(${profile.nickname})` : ""}
    </div>
    <div className="border-t-2 border-gray-400 my-4"></div>
    <div className="text-sm">
      <div>
        <span className="font-bold">Bio:</span> {profile.bio}
      </div>
      <div>
        <span className="font-bold">Status:</span> {profile.status}
      </div>
    </div>
  </div>
);

export default ProfileCard;
