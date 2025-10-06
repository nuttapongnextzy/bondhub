import ChallengeCard from "@/components/ChallengeCard";
import { Challenge } from "@/lib/definitions";

async function Page() {
  const challenges: Challenge[] = [
    {
      title: "Typing",
      description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      imageUrl: "",
    },
    {
      title: "C 2",
      description: "aaaaaaaaaaaaaaa",
      imageUrl: "",
    },
     {
      title: "C 3",
      description: "",
      imageUrl: "",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 p-1">
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.title}
          challenge= {challenge}
        />
      ))}
    </div>
  );
}

export default Page;
