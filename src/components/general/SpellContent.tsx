export const SpellContent = ({ spell, textColor }: { spell: any, textColor: string }) => {

  return (
    <>
      <div className="flex justify-between mb-4">
        <h5 className={`text-${spell?.type?.color || textColor}`}>{spell?.name}</h5>
        {spell?.type && <span className={`inline-flex py-1 px-2 items-center justify-center h-6 bg-${spell?.type?.color} rounded-md font-display text-xs font-semibold text-black mr-2 leading-[0rem]`}>{spell?.type?.label}</span>}
      </div>
      <p className={`text-${textColor}`}>{spell?.description}</p>
      <ul className={`mt-2 text-${textColor}`}>
        {spell?.requirements && <li className={`text-${textColor}`}>Requires: {spell?.requirements.map((r: string, i: number) => i > 0 ? ', ' + r : r)}</li>}
        {spell?.range && <li className={`text-${textColor}`}>Range: {spell?.range}</li>}
        {spell?.duration && <li className={`text-${textColor}`}>Duration: {spell?.duration?.isConcentration ? 'Concentration, ' : ''}{spell?.duration.time}</li>}
        {spell?.damage && <>
          {spell?.damage?.amount && <li className={`text-${textColor}`}>{spell?.damage?.amount}</li>}
          {spell?.damage?.condition && <li className={`text-${textColor}`}>{spell?.damage?.condition}</li>}
        </>}
      </ul>
    </>
  )
}