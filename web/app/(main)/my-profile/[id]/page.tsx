import { MyProfileForm } from "@/components/MyProfileForm";
import { fetchUser } from "@/lib/data";

type PageProps = {
  params: { id: string };
  searchParams?: { query?: string };
};

export default async function Page({ params, searchParams }: PageProps) {
  const profile = await fetchUser(params.id);

  return (
    <div className="flex items-center justify-center">
      <div className="p-10">
        <MyProfileForm profile={profile} />
      </div>
    </div>
  );
}
