import ProfileCard from "@/components/ProfileCard";
import { fetchUsers } from "@/lib/data";

async function Page() {
  const [users] = await Promise.all([fetchUsers()]);

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 p-1"
    >
      {users.map((user) => (
        <ProfileCard key={user.id} profile={user} />
      ))}
    </div>
  );
}

export default Page;
