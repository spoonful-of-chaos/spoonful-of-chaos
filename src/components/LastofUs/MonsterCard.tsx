import { Monster } from "@/utils/configs";

export const MonsterCard = ({ monster }: { monster: Monster }) => {
  const determineBgColor = (val: string) => {
    if (val === '1/8') {
      return 'inline-block bg-emerald-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    } else if (val === '1/4') {
      return 'inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    } else if (val === '1/2') {
      return 'inline-block bg-orange-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    } else if (val === '1') {
      return 'inline-block bg-rose-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    } else if (val === '2') {
      return 'inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    } else if (val === 'infected') {
      return 'inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
    } else if (val === 'human') {
      return 'inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
    } else {
      return 'inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2'
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-3">
          <div className="font-bold text-lg mb-2">{monster.name}</div>
          <span className={determineBgColor(monster.cr)}>CR: {monster.cr}</span>
          <span className={determineBgColor(monster.type)}>type: {monster.type}</span>
        </div>
    </div>
  )
}