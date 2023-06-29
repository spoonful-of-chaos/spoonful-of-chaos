import { DayControl } from '@/components/LastofUs/DayControl'
import { EncounterControl } from '@/components/LastofUs/EncounterControl'
import { EncounterSet } from '@/components/LastofUs/EncounterSet'
import { MonsterSet } from '@/components/LastofUs/MonsterSet'
import { SettingsProvider } from '@/context/settings.context'
import { getSortedCreatureData } from '@/lib/creatures'
import { Creature } from '@/lib/types'

const Encounters = ({ allCreatureData }: { allCreatureData: Creature[] }) => {
  return (
    <SettingsProvider>
      <h2 className='text-moonstone'>Adventure Day Encounter Set Generator</h2>
      <p className='text-moonstone mb-4'>Use this section to determine how many encounters per day your group should encounter, based on overall daily fatigue.</p>
      <div className="md:grid md:grid-cols-4 md:gap-4">
        <DayControl />
        <EncounterSet className="md:col-span-3 md:grid md:grid-cols-3 md:gap-4" />
      </div>
      <h2 className='text-moonstone mt-12'>Encounter Generator</h2>
      <p className='text-moonstone mb-4'>Use this section to generate different groups of monsters by difficulty and party level.</p>
      <div className="md:grid md:grid-cols-4 md:gap-4">
        <EncounterControl creatures={allCreatureData} />
        <MonsterSet className="md:col-span-3 md:grid md:grid-cols-3 md:gap-4" />
      </div>
    </SettingsProvider>
  )
}


export async function getStaticProps() {
  const allCreatureData = await getSortedCreatureData();
  return {
    props: {
      allCreatureData,
    },
  };
}

export default Encounters;