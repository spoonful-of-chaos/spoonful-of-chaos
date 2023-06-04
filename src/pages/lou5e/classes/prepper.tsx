import { ClassBreadcrumb } from "@/components/LastofUs/ClassBreadcrumb"
import { PrepperConfig, PrepperHitPoints, PrepperProfs } from "@/utils/prepperconfig";

const Prepper = () => {
  return (
    <>
      <ClassBreadcrumb />
      <h1 className="reverse-spoon mb-4">Smuggler</h1>
      <div className="class-col-layout">
        <div>
          <p>A young woman rushes onto the field, dodging infected to get to the downed soldier. Bullets whisk past her head as she crouches to administer emergency first aid. A runner swings its claws at her and she spins, knocking its arms out of the way with her rifle and firing a quick shot into its chest.</p>
          <p>A old man hums to himself at the top of a building. Raiders are attempting to sneak through the barriers he&apos;s created below, but they don&apos;t realize they&apos;ve already tripped his alarm wires. He takes aim and fires.</p>
        </div>
        <div>
          <h2>A Lifetime Preparing</h2>
          <p>They&apos;ve stocked up, rationed, planned. They know what kind of wire will last the longest while carrying the voltage for an electric fence. They know which plants are edible in the wilds and how to cook them. They can macgyver together traps out of just about anything. They are prepped.</p>
          <h2 className="reverse-spoon">Creating a Prepper</h2>
          <p>Preppers usually began their accumulation of knowledge prior to the outbreak of the Cordyceps Brain Infection. When creating a prepper, consider whether they learned their abilities on their own or with a teacher. Do they skew more towards medical applications or survival?</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <table className="table-auto w-full">
          <thead className="border-ghost border">
            <th className="text-ghost border-ghost border-b">Level</th>
            <th className="text-ghost border-ghost border-b">Proficiency Bonus</th>
            <th className="text-ghost border-ghost border-b">Features</th>
            <th className="text-ghost border-ghost border-b">Cantrips Known</th>
            <th className="text-ghost border-ghost border-b">Crafts Known</th>
          </thead>
          <tbody>
            {PrepperConfig.map((c: Record<string, string | number>, i: number) => (
              <tr key={`prepper-features-${c.level}-${i}`}>
                <td className="text-ghost border-ghost border">{c.level}</td>
                <td className="text-ghost border-ghost border">+{c.prof}</td>
                <td className="text-ghost border-ghost border">{c.feats}</td>
                <td className="text-ghost border-ghost border">{c.cantrips}</td>
                <td className="text-ghost border-ghost border">{c.crafts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-8 mb-2 reverse-moon">Class Features</h3>
      <p>As a Prepper, you gain the following class features.</p>
      <div className="class-col-layout mt-4">
        <div>
          <h4 className="h4-moon">Hit Points</h4>
          <table className="w-full">
            <tbody>
              {PrepperHitPoints.map((c, i) => (
                <tr key={`prepper-${c.label}-${i}`} className="border-b border-ghost">
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
              {PrepperProfs.map((c, i) => (
                <tr key={`prepper-${c.label}-${i}`} className="border-b border-ghost">
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
        <li>(a) Revolver (with 17 bullets) or (b) Rifle (with 12 cartridges)</li>
        <li>(a) 3x shivs or (b) a component pouch which contains:</li>
        <ul>
          <li>5x blades</li>
          <li>3x binding</li>
          <li>1x alcohol</li>
          <li>10 ft of thin wire</li>
        </ul>
        <li>(a) Backpack or (b) 2x med kits</li>
      </ul>
      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Crafting</h4>
          <p>Intelligence is your crafting ability, since you learn craft through study and experimentation. Use your Intelligence modifier when setting the saving throw DC of an item you craft and when making an attack roll with one:</p>
          <ul>
            <li><b>Item crafting ability:</b> Intelligence</li>
            <li><b>Save DC =</b> 8 + your proficiency bonus + your Intelligence modifier</li>
            <li><b>Attack Modifier =</b>your proficiency bonus + your Intelligence modifier</li>
          </ul>

          <h4 className="my-4 h4-crayola">Recovery</h4>
          <p>You have learned to regain some of your imagination and creativity by studying your recipe book every day. Once per day during a short rest, you may choose expended crafting slots to recover. The slots can have a combined level equal to or less than half of your Prepper level (rounded up) and no slot can be 6th level or higher.</p>

        </div>
        <div>

          <h4 className="my-4 h4-crayola">Always Ready</h4>
          <p>When you finish a long rest, roll 2D20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or any creature you can see with one of these rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each roll can only be used once and all are reset when starting a long rest.</p>

          <h4 className="my-4 h4-crayola">Prepper Speciality</h4>
          <p>At 5th level, you choose a speciality: Combat Medic, Artillerist, or Savant. Your choice grants you features at this level and again at 6th, 10th, and 14th level.</p>

        </div>
      </div>

      <h3 className="reverse-crayola mt-6">Prepper Speciality</h3>
      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Combat Medic</h4>
          <p>Combat medics focus on preserving the lives of their companions through quick actions and a range of medical skills honed towards the chaos and unpredictability of battlefields.</p>
          <h5 className="mt-2 text-crayola">Battlefield Effectiveness</h5>
          <p>Starting at 5th level, your healing crafts are more effective when used in combat. Whenever you use a craft of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2+ the craft&apos;s level.</p>
          <h5 className="mt-2 text-crayola">Defensive Nature</h5>
          <p>Starting at 6th level, as a reaction, when you are hit by an attack, you use one weapon you are holding as a shield. If the triggering attack does not hit your new AC, the attack instead misses.</p>

          <h4 className="my-4 h4-crayola">Artillerist</h4>
          <p>The artillerist is dedicated to the creation, care, and use of firearms.</p>
          <h5 className="mt-2 text-crayola">Practiced Aim</h5>
          <p>Starting at 5th level, when using a rifle, you can shoot at long range without disadvantage.</p>
          <h5 className="mt-2 text-crayola">Create Flamethrower</h5>
          <p>At 6th level, you&apos;ve learned how to create a rudimentary flamethrower out of a variety of materials. This can only be done once before requiring a short or long rest to recharge.</p>
          <p>The flamethrower will last a certain number of usages before its fuel is exhausted. Propose to the Game Master the materials you would like to use to create this weapon. The weapon requires a way to fire it, a containment for the fuel, a way to expel fuel in a direction, and an initial fire source. Based on your specs, the Game Master will determine the number of uses the weapon can have.</p>

        </div>

        <div>
        <h4 className="my-4 h4-crayola">Savant</h4>
          <p>The goal of the savant is to have a solution to any situation.</p>
          <h5 className="mt-2 text-crayola">Cantrip Specialist</h5>
          <p>Starting at 5th level, you develop your talent for simple crafts. You gain the following benefits:</p>
          <ul>
            <li>You know one additional cantrip beyond what&apos;s normally allowed for a prepper of your level.</li>
            <li>When casting a cantrip, you gain a +1 bonus to attack rolls and to your craft save DC. This bonus increases to +2 at 9th level and +3 at 15th level.</li>
          </ul>
          <h5 className="mt-2 text-crayola">Improvised Design</h5>
          <p>Starting at 6th level, when you craft something that forces a creature to make a saving throw to resist its effects, you can force on target of the craft disadvantage on its first saving throw made against that craft. This can only be used once before needing a long or short rest to recharge.</p>
          <h5 className="mt-2 text-crayola">Work in Progress</h5>
          <p>Starting at 10th level, you can ready half-formed projects for easy  completion when needed. As an action, replace any prepared craft with any other craft. Once you use this feature, you can&apos;t use it again until you finish a short or long rest.</p>
        </div>
      </div>
    </>
  )
}

export default Prepper;