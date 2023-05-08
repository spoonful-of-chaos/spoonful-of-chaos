import { DayControl } from '@/components/LastofUs/DayControl'
import { EncounterControl } from '@/components/LastofUs/EncounterControl'
import { EncounterSet } from '@/components/LastofUs/EncounterSet'
import { MonsterSet } from '@/components/LastofUs/MonsterSet'
import { WizardContainer } from '@/components/WizardContainer'
import { WizardStep } from '@/components/WizardStep'
import { MonsterProvider } from '@/context/monsters.context'
import { SettingsProvider } from '@/context/settings.context'
import { MainLayout } from '@/layouts/MainLayout'

export default function EncounterGenerator() {
  return (
    <MainLayout>
      <SettingsProvider>
        <MonsterProvider>
          <WizardContainer>
            <div className="grid grid-cols-4 gap-4">
              <WizardStep>
                <DayControl />
                <EncounterSet />
              </WizardStep>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              <WizardStep>
                <EncounterControl />
                <MonsterSet />
              </WizardStep>
            </div>
          </WizardContainer>
        </MonsterProvider>
      </SettingsProvider>
    </MainLayout>
  )
}
