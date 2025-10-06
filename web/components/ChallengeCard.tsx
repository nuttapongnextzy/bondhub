import { Challenge } from "@/lib/definitions";
import Image from "next/image";

interface props {
  challenge: Challenge;
}

function ChallengeCard({ challenge }: props) {
  return (
    <div className="m-3 p-6 bg-green-500 rounded-2xl shadow-lg mx-auto w-[300px] h-[200px] flex flex-col justify-center items-center gap-5">
      <h1 className="text-lg text-gray-800 font-bold">{challenge.title}</h1>
      {challenge.description && (
        <p className="break-all">{challenge.description}</p>
      )}
      {challenge.imageUrl && (
        <Image
          src={challenge.imageUrl}
          alt="Challenge"
          width={100}
          height={100}
        />
      )}
      <button className="px-2 py-0 bg-blue-600 rounded hover:bg-blue-700 text-md">
        Play
      </button>
    </div>
  );
}

export default ChallengeCard;
