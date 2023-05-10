import { Card } from "@/components/general/Card";

const Characters = () => {
  return (
    <>
      <h1 className="mb-2">Characters</h1>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <p>
          Since The Last of Us takes place in a modern-day United States setting, many of the conventional rules/playstyles of Dungeons & Dragons are not applicable. The largest of these changes is the adjustment from spellcasting to crafting. To accommodate for this, the following classes have been created for the purpose of this campaign. 
        </p>
        <p>
        These are mostly reskins of existing classes, with tweaks thrown in to better suit the setting. To create a character, follow 5e character creation rules, bearing in mind that spells and cantrips have been replaced by a crafting system.
        </p>
      </div>
      <h4 className="mt-6">A Note on Playable Species</h4>
      <p>Because <span className="italics">The Last of Us</span> takes place in a modern, real-world setting, the only available playable species is human. Additionally, because there are no other playable species, do not take the additional ability score Human Trait from the Player&apos;s Handbook.</p>
      <h2 className="mt-12">Classes</h2>
      <div className="flex flex-col mt-8 md:grid md:grid-cols-3 md:gap-8">
        <Card>
          <h5>Smuggler</h5>
          <p>A charismatic fighter with a few tricks up their sleeve.</p>
          <ul>
            <li><span className="font-black">Hit Die:</span> d8</li>
            <li><span className="font-black">Primary Ability:</span> Charisma</li>
            <li><span className="font-black">Saving Throw Proficiencies:</span> Dexterity & Charisma</li>
            <li><span className="font-black">Armor & Weapon Proficiencies:</span> Handguns, rifles, simple weapons, hand-to-hand</li>
          </ul>
        </Card>
        <Card>
          <h5>Survivor</h5>
        </Card>
        <Card>
          <h5>Prepper</h5>
        </Card>
        <Card>
          <h5>Soldier</h5>
        </Card>
        <Card>
          <h5>Bandit</h5>
        </Card>
      </div>
    </>
  )
};

export default Characters;