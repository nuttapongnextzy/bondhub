import ChallengeCard from "@/components/ChallengeCard";
import { Challenge } from "@/lib/definitions";

async function Page() {
  const challenges: Challenge[] = [
    {
      id: "1",
      title: "Typing",
      description:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      imageUrl: "",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 p-1">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}

export default Page;
