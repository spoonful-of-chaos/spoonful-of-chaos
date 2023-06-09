import { Creature } from "@/lib/types";

export const MonsterCard = ({ monster }: { monster: Creature }) => {
  const determineBgColor = (val: string) => {
    if (val === '1/8') {
      return 'emerald'
    } else if (val === '1/4') {
      return 'sky'
    } else if (val === '1/2') {
      return 'orange'
    } else if (val === '1') {
      return 'rose'
    } else if (val === '2') {
      return 'purple'
    } else {
      return 'gray'
    }
  }

  return (
    <div className="mt-2 flex justify-between items-start">
        <div>
          <span className="font-semibold -mb-0">{monster.title}</span> |
          <span className="italic"> {monster.type}</span>
        </div>
        <span className={`font-display tracking-wide inline-block bg-${determineBgColor(monster.challenge)}-600 rounded-full px-3 py-1 text-sm text-ghost mr-2 mb-2`}>CR: {monster.challenge}</span>
    </div>
  )
}