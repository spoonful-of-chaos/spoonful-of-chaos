import { DayControl } from '@/components/LastofUs/DayControl'
import { EncounterControl } from '@/components/LastofUs/EncounterControl'
import { EncounterSet } from '@/components/LastofUs/EncounterSet'
import { MonsterSet } from '@/components/LastofUs/MonsterSet'
import { WizardContainer } from '@/components/WizardContainer'
import { WizardStep } from '@/components/WizardStep'
import { MonsterProvider } from '@/context/monsters.context'
import { SettingsProvider } from '@/context/settings.context'

const Encounters = () => {
  return (
    <SettingsProvider>
      <MonsterProvider>
        <WizardContainer>
          <h2 className='text-moonstone mb-4'>Adventure Day Encounter Set Generator</h2>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <WizardStep>
              <DayControl />
              <EncounterSet className="md:col-span-3 md:grid md:grid-cols-3 md:gap-4" />
            </WizardStep>
          </div>
          <h2 className='text-moonstone mt-12 mb-4'>Encounter Generator</h2>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <WizardStep>
              <EncounterControl />
              <MonsterSet className="md:col-span-3 md:grid md:grid-cols-3 md:gap-4" />
            </WizardStep>
          </div>
        </WizardContainer>
      </MonsterProvider>
    </SettingsProvider>
  )
}

export default Encounters;