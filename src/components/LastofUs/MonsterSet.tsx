import { useSettings } from "@/context/settings.context";
import { MonsterGroup } from "./MonsterGroup";
import { Card } from "../general/Card";

export const MonsterSet = (props: any) => {
  const { state } = useSettings();
  return (
    <div {...props}>
      {state?.monsterSets && state.monsterSets.map((m, i) => (
        <Card key={`monsterSet${i}`}>
          <h6>Potential Monster Group {i + 1}</h6>
          <MonsterGroup key={`monsterGroup${i}`} monsters={m} groupIndex={i} />
        </Card>
      ))}
    </div>
  )
}