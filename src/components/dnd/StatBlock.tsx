import { Creature,  StatTypeKeys } from "@/lib/types"
import { challengeRatingConfig } from "@/utils/configs"
import { calculateModifier } from "@/utils/statUtils"

export const StatBlock = ({ creature, variant = 'raisin' }: { creature: Creature, variant?: string }) => {


  return (
    <div className={`bg-${variant} text-black rounded p-3`}>
      <div>
        <h3 className="text-black">{creature.title}</h3>
        <span className="italic text-sm">
          {creature?.size} {creature?.type}{creature?.alignment && `, ${creature?.alignment} alignment`}
        </span>
      </div>
      <div className="py-2 border-black border-b">
        {creature?.armorClass && <p className="-mb-0 text-black"><span className="font-bold">Armor Class </span>{creature?.armorClass}</p>}
        {creature?.hitPoints && <p className="-mb-0 text-black"><span className="font-bold">Hit Points </span>{creature?.hitPoints}</p>}
        {creature?.speed && <p className="-mb-0 text-black"><span className="font-bold">Speed </span>{creature?.speed}</p>}
      </div>
      <div className="py-2 border-black border-b">
        <table className="w-full my-1">
          <thead>
            <tr>
              {creature?.stats && Object.keys(creature.stats).map((s: string) => (
                <th className="text-black text-center font-display tracking-widest text-base p-0" key={`th-${creature.id}-${s}`}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {creature?.stats && Object.keys(creature.stats).map((s: string) => (
                  <td  key={`td-${creature.id}-${s}`} className="text-black text-center font-display tracking-wide text-lg p-0">{calculateModifier(creature.stats[s as StatTypeKeys])}</td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-2 border-black border-b">
        {creature?.savingThrows && <p className="-mb-0 text-black"><span className="font-bold">Saving Throws </span>{creature?.savingThrows}</p>}
        {creature?.skills && <p className="-mb-0 text-black"><span className="font-bold">Skills </span>{creature?.skills}</p>}
        {creature?.resistances && <p className="-mb-0 text-black"><span className="font-bold">Damage Resistances </span>{creature?.resistances}</p>}
        {creature?.immunities?.damage && <p className="-mb-0 text-black"><span className="font-bold">Damage Immunities </span>{creature?.immunities?.damage}</p>}
        {creature?.immunities?.condition && <p className="-mb-0 text-black"><span className="font-bold">Condition Immunities </span>{creature?.immunities?.condition}</p>}
        {creature?.senses && <p className="text-black -mb-0"><span className="font-bold">Senses </span>{creature?.senses}</p>}
        {creature?.languages && <p className="text-black -mb-0"><span className="font-bold">Languages </span>{creature?.languages}</p>}
        {creature?.challenge && <p className="text-black -mb-0"><span className="font-bold">Challenge </span>{creature?.challenge} {`(${challengeRatingConfig[creature.challenge as keyof typeof challengeRatingConfig].xp} XP)`}</p>}
      </div>
      <div className="py-2 text-black" dangerouslySetInnerHTML={{ __html: creature.content }} />
    </div>
  )
}