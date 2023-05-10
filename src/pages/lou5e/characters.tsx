import { Card } from "@/components/general/Card";
import { classes } from "@/utils/classes";
import Link from "next/link";

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
        {Object.keys(classes)?.map((c: string, i: number) => (
          <Card variant="ghost">
            <h5 className="text-black">{c.toUpperCase()}</h5>
            <p className="text-black">{classes[c].description}</p>
            <table className="mt-4">
              <tr>
                <th>Hit Die</th>
                <td>{classes[c].hd}</td>
              </tr>
              <tr>
                <th>Primary Ability</th>
                <td>{classes[c].primary}</td>
              </tr>
              <tr>
                <th>Saving Throw Proficiencies</th>
                <td>{classes[c].throw_prof}</td>
              </tr>
              <tr>
                <th>Armor & Weapon Proficiencies</th>
                <td>{classes[c].armor_prof}</td>
              </tr>
            </table>
          </Card>
        ))}
      </div>
    </>
  )
};

export default Characters;