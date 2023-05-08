import { useSettings } from "@/context/settings.context";
import { MonsterGroup } from "./MonsterGroup";

export const MonsterSet = () => {
  const { state } = useSettings();
  return (
    <>
      {state?.monsterSets && state.monsterSets.map((m, i) => (
        <div key={`monsterSet${i}`} className="max-w-sm mx-4">
          <h2 className="px-6 text-xl font-bold">Potential Monster Group {i + 1}</h2>
          <MonsterGroup key={`monsterGroup${i}`} monsters={m} groupIndex={i} />
        </div>
      ))}
    </>
  )
}