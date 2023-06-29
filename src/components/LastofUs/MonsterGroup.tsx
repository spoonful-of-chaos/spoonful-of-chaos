import { MonsterCard } from "./MonsterCard"
import { Creature } from "@/lib/types"

export const MonsterGroup = ({ monsters, groupIndex }: { monsters: Creature[], groupIndex: number}) => {
  return (
    <div>
      {monsters && monsters.map((m, i) => (<MonsterCard key={`${m.title}${groupIndex}${i}`} monster={m} />))}
    </div>
  )
}