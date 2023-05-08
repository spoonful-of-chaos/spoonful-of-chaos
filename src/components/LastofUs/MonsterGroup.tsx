import { Monster } from "@/utils/configs"
import { MonsterCard } from "./MonsterCard"

export const MonsterGroup = ({ monsters, groupIndex }: { monsters: Monster[], groupIndex: number}) => {
  return (
    <div>
      {monsters && monsters.map((m, i) => (<MonsterCard key={`${m.name}${groupIndex}${i}`} monster={m} />))}
    </div>
  )
}