
export const EncounterCard = ({ encounter, index }: { encounter: string; index: number }) => {
  const determineBgColor = (val: string) => {
    if (val === 'mild') {
      return 'inline-block bg-violet-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    } else if (val === 'bruising') {
      return 'inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    } else if (val === 'bloody') {
      return 'inline-block bg-teal-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    } else if (val === 'brutal') {
      return 'inline-block bg-cyan-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    } else if (val === 'oppressive') {
      return 'inline-block bg-fuchsia-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    } else {
      return 'inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-1';
    }
  }

  return (
    <div key={encounter + index} className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-3">
          <span className={determineBgColor(encounter)}>{encounter}</span>
        </div>
    </div>
  )
}