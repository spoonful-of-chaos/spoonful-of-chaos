
export const EncounterCard = ({ encounter, index }: { encounter: string; index: number }) => {
  const determineBgColor = (val: string) => {
    if (val === 'mild') {
      return 'violet';
    } else if (val === 'bruising') {
      return 'indigo';
    } else if (val === 'bloody') {
      return 'teal';
    } else if (val === 'brutal') {
      return 'cyan';
    } else if (val === 'oppressive') {
      return 'fuchsia';
    } else {
      return 'gray';
    }
  }

  return (
    <div key={encounter + index} className="mt-2">
      <span className={`font-display tracking-wide inline-block bg-${determineBgColor(encounter)}-600 rounded-full px-3 py-1 text-sm text-ghost mr-2 mb-2`}>{encounter}</span>
    </div>
  )
}