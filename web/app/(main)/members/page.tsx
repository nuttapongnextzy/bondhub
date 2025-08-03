import ProfileCard from "@/components/ProfileCard";
import { fetchUsers } from "@/lib/data";

async function Page() {
  const [users] = await Promise.all([fetchUsers()]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
      {users.map((user) => (
        <ProfileCard key={user.id} profile={user} />
      ))}
    </div>
  );
}

export default Page;
