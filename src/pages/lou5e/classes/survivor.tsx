import { ClassBreadcrumb } from "@/components/LastofUs/ClassBreadcrumb";
import { SurvivorConfig, SurvivorHitPoints, SurvivorProfs } from "@/utils/survivorconfig";
import Link from "next/link";

const Survivor = () => {
  return (
    <>
      <ClassBreadcrumb />
      <h1 className="reverse-spoon mb-4">Survivor</h1>
      <div className="class-col-layout">
        <div>
          <p>
            A young boy crouches in the shadows of the trees as a horde of runners shuffles slowly below him. He raises his bow and releases a flurry of arrows, each one finding their mark in the brain of each infected. He never needs to aim at the same infected twice.
          </p>
          <p>
            A girl wearing a bandana bends to inspect the trail she&apos;s following through this suburban neighborhood, quickly assessing the raiding party&apos;s numbers and strength. She knows they&apos;ve been here about 3 days, collecting what they can from the houses nearby while dispatching infected. She&apos;s watched their guard rotations. She insures her knife is secure at her side as she stalks up to the camp. The raiders never even notice her taking the food.
          </p>
          <p>
            A woman whistles sharply as she takes aim with her bow at the approaching raiders. From the shadows, a german shepard launches itself at the nearest one, grabbing him by the arm and throwing him to the ground. The other raider raises his gun to fire at the dog when an arrow finds it&apos;s mark in his chest. Another whistle and the dog returns to the woman&apos;s side as they both escape into the maze of crumbling buildings around them.
          </p>
        </div>
        <div>
          <h2>Save Who You Can Save</h2>
          <p>Maybe they’re lucky. Maybe they’re good. Somehow, the survivor is still here. The simple tenant of the survivor is that the infected can’t kill you unless they hear you and get close to you. Let’s make sure they don’t get close. Let’s stay quiet.</p>
          <h2>Knowledge is Power</h2>
          <p>Survivors study their surroundings, enemies, and prey thoroughly before taking action. What they learn, they don&apos;t tend to forget, building that knowledge into an innate sense of the world around them. In these changing times, their ability to absorb this information and remain flexible in their actions is powerful.</p>
          <h2 className="reverse-spoon">Creating a Survivor</h2>
          <p>Where a surivor learned their skills shapes their abilities and perceptions of the world. Something happened to them to make them realize that they are the predator in a world of prey.</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <table className="table-auto w-full">
          <thead className="border-ghost border">
            <th className="text-ghost border-ghost border-b">Level</th>
            <th className="text-ghost border-ghost border-b">Proficiency Bonus</th>
            <th className="text-ghost border-ghost border-b">Features</th>
            <th className="text-ghost border-ghost border-b">Crafts Known</th>
          </thead>
          <tbody>
            {SurvivorConfig.map((c: Record<string, string | number>, i: number) => (
              <tr key={`survivor-features-${c.level}-${i}`}>
                <td className="text-ghost border-ghost border">{c.level}</td>
                <td className="text-ghost border-ghost border">+{c.prof}</td>
                <td className="text-ghost border-ghost border">{c.feats}</td>
                <td className="text-ghost border-ghost border">{c.crafts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-8 mb-2 reverse-moon">Class Features</h3>
      <p>As a Survivor, you gain the following class features.</p>
      <div className="class-col-layout mt-4">
        <div>
          <h4 className="h4-moon">Hit Points</h4>
          <table className="w-full">
            <tbody>
              {SurvivorHitPoints.map((c, i) => (
                <tr key={`survivor-${c.label}-${i}`} className="border-b border-ghost">
                  <th className="text-ghost px-0">{c.label}</th>
                  <td className="text-ghost">{c.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="h4-moon">Proficiencies</h4>
          <table className="w-full">
            <tbody>
              {SurvivorProfs.map((c, i) => (
                <tr key={`survivor-${c.label}-${i}`} className="border-b border-ghost">
                  <th className="text-ghost px-0">{c.label}</th>
                  <td className="text-ghost">{c.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h4 className="h4-moon">Equipment</h4>
      <p>
        You start with the following equipment, in addition to the equipment granted by your background:
      </p>
      <ul>
        <li>(a) Hatchet or (b) 5x water purification tablets</li>
        <li>(a) 3x shivs or (b) bushcraft kit which contains:</li>
        <ul>
          <li>3x rags</li>
          <li>1x alcohol</li>
          <li>hunting knife</li>
        </ul>
        <li>(a) Quiver with 5x arrows or (b) 1x bandages</li>
      </ul>
      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Favored Enemy</h4>
          <p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.</p>
          <p>Choose a type of favored enemy:</p>
          <ul>
            <li>Runners</li>
            <li>Stalkers</li>
            <li>Clickers</li>
            <li>Bloaters</li>
            <li>Humans</li>
          </ul>
          <p>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p>
          <p>You choose one additional favored enemy at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</p>

          <h4 className="my-4 h4-crayola">Focus</h4>
          <p>Roll a D20 with disadvantage and focus your hearing, based on the DC of the nearby enemies your GM will draw (or mark) on a small map where your enemies most likely are in comparison to you. Starting at level 4, you can roll with advantage instead of Disadvantage.</p>

          <h4 className="my-4 h4-crayola">Crafting</h4>
          <p>You have learned to shape your environment to your needs.</p>
          <ul>
            <li><b>Item Crafting Ability:</b> Wisdom</li>
            <li><b>Craft save DC =</b> 8 + your proficiency bonys + your Wisdom modifier</li>
            <li><b>Craft attack modifier =</b> your proficiency bonus + your Wisdom modifier</li>
          </ul>

          <h4 className="my-4 h4-crayola">Fighting Style</h4>
          <p>At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options:</p>
          <h5 className="mt-2 text-crayola">Stalker</h5>
          <p>When you fail a stealth takedown, you can re-roll one time to try and finish them off, this can only be done if you succeed a contested Dexterity saving throw. After 4 uses you will need to rest before being able to use this again.</p>

        </div>
        <div>
          <h5 className="mt-2 text-crayola">Dueling</h5>
          <p>When you are wielding a melee weapon in one hand, and no other weapons at all, you gain a +2 bonus to damage rolls with that weapon.</p>
          <h5 className="mt-2 text-crayola">Archery</h5>
          <p>You gain a +2 bonus to attack rolls you make with a bow.</p>
          <h5 className="mt-2 text-crayola">Two-Weapon Fighting</h5>
          <p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p>

          <h4 className="my-4 h4-crayola">Favored Terrain</h4>
          <p>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions.</p>
          <p>Choose one type of favored terrain: city, suburb, rural, coastline. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you&apos;re proficient in.</p>
          <p>While traveling for an hour or more in your favored terrain, you gain the following benefits:</p>
          <ul>
            <li>Difficult terrain doesn&apos;t slow your group&apos;s travel.</li>
            <li>Your group can&apos;t become lost unless tricked.</li>
            <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li>
            <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
            <li>When you forage, you find twice as much food as you normally would.</li>
            <li>While tracking other creatures, you also learn their exact numbers, their sizes, and how long ago they passed through this area.</li>
          </ul>
          <p>Choose an additional favored terrain type at 6th and 14th level.</p>

          <h4 className="my-4 h4-crayola">Ability Score Improvement</h4>
          <p>When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.</p>

          <h4 className="my-4 h4-crayola">Survivor Archetype</h4>
          <p>At 5th level, you choose an archetype that you strive to emulate: Hunter or Beast Master. Your choice grants you features at 5th, 7th, 11th, and 15th level. Archetypes are detailed at the end of this description. </p>

        </div>
      </div>
      <h3 className="reverse-crayola mt-6">Survivor Archetypes</h3>
      <div className="class-col-layout">
        <div>
          <h4 className="my-4 h4-crayola">Hunter</h4>
          <p>Emulating the Hunter archetype means accepting your place as a bulwark between the people you protect and the terrors of the world of cordyceps. You learn specialized techniques for fighting the threats you face.</p>
          <h5 className="mt-2 text-crayola">Hunter’s Prey</h5>
          <p>At 5th level, you gain one of the following features of your choice:</p>
          <h6 className="mt-2 text-crayola">Colossus Slayer.</h6>
          <p>Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You deal this extra damage only once per turn.</p>
          <h6 className="mt-2 text-crayola">Giant Killer.</h6>
          <p>When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately.</p>
          <h6 className="mt-2 text-crayola">Horde Breaker.</h6>
          <p>Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 6 feet of the original target and within range of your weapon.</p>
        </div>
        <div>
          <h4 className="my-4 h4-crayola">Beast Master</h4>
          <p>The Beast Master archetype embodies an extraordinary friendship between the survivor and a special animal.</p>
          <h5 className="mt-2 text-crayola">Survivor’s Companion</h5>
          <p>At 5th level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose one of the beasts from <Link href="/lou5e/appendix-a">Appendix A</Link>. Add your proficiency bonus to the beast’s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals the hit point number it its stat block or four times your survivor level, whichever is higher. Like any creature, it can spend Hit Dice during a short rest to regain hit points.</p>
          <p>The beast obeys your commands as best it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to Attack, Dash, Disengage, or Help. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action. If you don’t issue a command, the beast takes the Dodge action.</p>
          <p>If you are incapacitated or absent, the beast acts on its own, focusing on protecting you and itself. The beast never requires your command to use its reaction, such as when making an opportunity attack.</p>
          <p>While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.</p>
          <p>If the beast dies, you can obtain a new companion by spending 8 hours bonding with a beast that isn’t hostile to you.</p>
        </div>
      </div>
    </>
  )
}

export default Survivor;
