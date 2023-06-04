import { ClassBreadcrumb } from "@/components/LastofUs/ClassBreadcrumb";
import { SmugglerConfig, SmugglerHitPoints, SmugglerProfs } from "@/utils/classes";

const Smuggler = () => {
  return (
    <>
      <ClassBreadcrumb />
      <h1 className="reverse-spoon mb-4">Smuggler</h1>
      <div className="class-col-layout">
        <div>
          <p>
            Smiling, a man in dusty clothes reaches out his hand to another, the palmed package of pills exchanged for ration cards with nothing more than a handshake.
          </p>
          <p>
            A woman crouches and listens carefully around the corner of the broken down office building. Moving silently, she approaches the clicker from behind, stabbing it through the neck before it can scream.
          </p>
          <p>
            The young man breathes in and exhales slowly before pulling the trigger on the rifle braced against his shoulder. The runner chasing his partner collapses on the ground.
          </p>
          <h2>Charismatic Fighters</h2>
          <p>Smugglers are hardened salesmen and traders that do whatever it takes to make it another day, selling and bartering with whatever they can get their hands on. In this world, it's not uncommon for deals to go wrong, and smugglers are more than used to putting a bullet right between a thief's eyes.</p>
        </div>
        <div>
          <h2>Learning From Experience</h2>
          <p>Smugglers don’t settle in one place for too long, relying on safe routes known only to them in and out of major cities. While most of the world huddles within Quarantine Zones, smugglers are some of the only people with working knowledge of the infected, giving them an edge in avoiding or attacking them.</p>
          <h2 className="reverse-spoon">Creating a Smuggler</h2>
          <p>Smugglers put on a charming mask to get their job done, but they get into their line of work for a reason. They might have a background to hide or someone they’re running from. Your background is a well-kept secret, known only to those you truly trust, but probably isn’t a kind one.</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <table className="table-auto w-full">
          <thead className="border-ghost border">
            <th className="text-ghost border-ghost border-b">Level</th>
            <th className="text-ghost border-ghost border-b">Proficiency Bonus</th>
            <th className="text-ghost border-ghost border-b">Features</th>
            <th className="text-ghost border-ghost border-b">Cantrips Known</th>
            <th className="text-ghost border-ghost border-b">Smuggler Points</th>
          </thead>
          <tbody>
            {SmugglerConfig.map((c: Record<string, string | number>, i: number) => (
              <tr key={`smuggler-features-${c.level}-${i}`}>
                <td className="text-ghost border-ghost border">{c.level}</td>
                <td className="text-ghost border-ghost border">+{c.prof}</td>
                <td className="text-ghost border-ghost border">{c.features}</td>
                <td className="text-ghost border-ghost border">{c.cantrips}</td>
                <td className="text-ghost border-ghost border">{c.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-8 mb-2 reverse-moon">Class Features</h3>
      <p>As a Smuggler, you gain the following class features.</p>
      <div className="class-col-layout mt-4">
        <div>
          <h4 className="h4-moon">Hit Points</h4>
          <table className="w-full">
            {SmugglerHitPoints.map((c, i) => (
              <tr key={`smuggler-${c.label}-${i}`} className="border-b border-ghost">
                <th className="text-ghost px-0">{c.label}</th>
                <td className="text-ghost">{c.val}</td>
              </tr>
            ))}
          </table>
        </div>
        <div>
          <h4 className="h4-moon">Proficiencies</h4>
          <table className="w-full">
            {SmugglerProfs.map((c, i) => (
              <tr key={`smuggler-${c.label}-${i}`} className="border-b border-ghost">
                <th className="text-ghost px-0">{c.label}</th>
                <td className="text-ghost">{c.val}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <h4 className="h4-moon">Equipment</h4>
          <p>
            You start with the following equipment, in addition to the equipment granted by your background:
            <ul>
              <li>(a) Revolver (with 17 bullets) or (b) Machete</li>
              <li>(a) Handgun (with one clip) or (b) Flashlight</li>
              <li>(a) Backpack or (b) 2x med kit</li>
            </ul>
          </p>
      <div className="class-col-layout">
        <div>
          <h4 className="my-4 h4-crayola">Crafting</h4>
          <p>Drawing on your expertise with a wide variety of goods, you always have a few “tricks of the trade” ready to keep an edge.</p>
          <h5 className="mt-2 text-crayola">Cantrips</h5>
          <p>At 1st level, you know two cantrips of your choice from the cantrip list. You learn additional ones of your choice at higher levels, as shown in the Cantrips Known column of the Smuggler table.</p>
          <ul>
            <li><b>Item Crafting Ability:</b> Charisma</li>
            <li><b>Craft save DC =</b> 8 + your proficiency bonys + your Charisma modifier</li>
            <li><b>Craft attack modifier =</b> your proficiency bonus + your Charisma modifier</li>
          </ul>

          <h4 className="my-4 h4-crayola">Fighting Style</h4>
          <p>At 1st level, you adopt a style of fighting as your specialty. Choose one of the following options:</p>
          <h5 className="mt-2 text-crayola">Stalker</h5>
          <p>When you fail a stealth takedown, you can re-roll one time to try and finish them off, this can only be done if you succeed a contested Dexterity saving throw. After 4 uses you will need to rest before being able to use this again.</p>
          <h5 className="mt-2 text-crayola">Dueling</h5>
          <p>When you are wielding a melee weapon in one hand, and no other weapons at all, you gain a +2 bonus to damage rolls with that weapon.</p>
          <h5 className="mt-2 text-crayola">Cool Under Fire</h5>
          <p>When attacking with a firearm, you take a deep calming breath and are able to aim better. Make your damage roll with advantage. After 4 uses, you will need to rest before being able to use this again.</p>
          <h5 className="mt-2 text-crayola">The Muscle</h5>
          <p>When attacking with your bare fist, add your strength or dexterity (your choice) modifier to the attack and roll with advantage. Use that same modifier for your damage roll modifier.</p>
        </div>
        <div>
          <h4 className="my-4 h4-crayola">Focus</h4>
          <p>Roll a D20 with disadvantage and focus your hearing, based on the DC of the nearby enemies your GM will draw (or mark) on a small map where your enemies most likely are in comparison to you. Starting at level 4, you can roll with advantage instead of Disadvantage.</p>
          <h4 className="my-4 h4-crayola">Jack of All Trades</h4>
          <p>Choose an additional fighting style.</p>
          <h4 className="my-4 h4-crayola">Expertise</h4>
          <p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>
          <h4 className="my-4 h4-crayola">Smuggler Points</h4>
          <p>Starting at 5th level, your experience allows you to understand critical points in the flow of combat. This experience is represented as a number of smuggler points. Refer to the class feature table to see the number of points available per level.</p>
          <p>You can spend these points to fuel various features. You start knowing these three: Flurry, Patient Defense, and Stunning Strike.</p>
          <p>When you spend a smuggler point, it is lost until you finish a short or long rest. Some of your features require your target to make a saving throw. Use the same saving throw calculation and value as your cantrip feature.</p>
          <h5 className="mt-2 text-crayola">Flurry</h5>
          <p>Immediately after you take the attack action on your turn, you can spend 1 smuggler point to make two unarmed strikes as a bonus action.</p>
          <h5 className="mt-2 text-crayola">Patient Defense</h5>
          <p>You can spend 1 smuggler point to take the Dodge action as a bonus action on your turn.</p>
          <h5 className="mt-2 text-crayola">Stunning Strike</h5>
          <p>When you hit another creature with a melee weapon attack, you can spend 1 smuggler point to attempt a stunning strike. The target must succeed on a constitution saving throw or be stunned until the end of your next turn.</p>
        </div>
      </div>
    </>
  )
}

export default Smuggler;