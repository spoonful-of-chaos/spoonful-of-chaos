import { ClassBreadcrumb } from "@/components/LastofUs/ClassBreadcrumb";
import { SoldierConfig, SoldierHitPoints, SoldierProfs } from "@/utils/soldierconfig";

const Soldier = () => {
  return (
    <>
      <ClassBreadcrumb />
      <h1 className="reverse-spoon mb-4">Soldier</h1>
      <div className="class-col-layout">
        <div>
          <p>A woman in a bulletproof vest leans her back against the wall of the skyscraper and listens. She can hear the clickers roaming around inside and knows she doesn&apos;t quite have the angle. She signals her second-in-command on the opposite side of the doorway to start the attack.</p>

          <p>A man rushes towards his teammate who is quickly being surrounded by infected. He takes two shots, which both drop a runner instantaneously, then holsters his handgun in favor of the baseball bat on his back. Just as the final clicker is about to bite down on his compatriot, the man swings the bat, connecting with the clicker and knocking it away.</p>

          <h2>Combat Experts</h2>
          <p>The war hasn&apos;t changed, just the battlefield. Soldiers are trained military men and women - they were before the infection and they will be after. Masters of firearms, weaponry, and combat.</p>
        </div>
        <div>
          <h2>Impact of FEDRA</h2>
          <p>The Federal Disaster Response Agency (or FEDRA) is the main authority in the U.S. following the outbreak of the Cordyceps Brain Infection. It is a military arm of the government which, in many places, has entirely replaced any other form of government. For some, FEDRA is a bastion of peace and order, but for others, it has become as much a criminal organization as any raider group. This has attracted, and distanced, different kinds of soldiers.</p>

          <h2 className="reverse-spoon">Creating a Soldier</h2>
          <p>When creating a soldier, consider whether they have a military background, either before or after the CBI outbreak. If after, were they part of FEDRA? Why are they no longer?</p>

        </div>
      </div>

      <div className="w-full mt-4">
        <table className="table-auto w-full">
          <thead className="border-ghost border">
            <th className="text-ghost border-ghost border-b">Level</th>
            <th className="text-ghost border-ghost border-b">Proficiency Bonus</th>
            <th className="text-ghost border-ghost border-b">Features</th>
          </thead>
          <tbody>
            {SoldierConfig.map((c: Record<string, string | number>, i: number) => (
              <tr key={`prepper-features-${c.level}-${i}`}>
                <td className="text-ghost border-ghost border">{c.level}</td>
                <td className="text-ghost border-ghost border">+{c.prof}</td>
                <td className="text-ghost border-ghost border">{c.feats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 mb-2 reverse-moon">Class Features</h3>
      <p>As a Soldier, you gain the following class features.</p>

      <div className="class-col-layout mt-4">
        <div>
          <h4 className="h4-moon">Hit Points</h4>
          <table className="w-full">
            <tbody>
              {SoldierHitPoints.map((c, i) => (
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
              {SoldierProfs.map((c, i) => (
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
        <li>(a) Kevlar vest or (b) a hunting knife</li>
        <li>(a) Rifle (with 15 shells) or (b) a navigator kit which contains:</li>
        <ul>
          <li>1 map of the United States</li>
          <li>1 compass</li>
          <li>5x water purification tablets</li>
        </ul>
        <li>(a) Handgun (with 1 clip) or (b) a flashlight</li>
      </ul>

      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Fighting Style</h4>
          <p>You adopt a particular style of fighting as your specialty. Choose one of the following options:</p>
          <h5 className="mt-2 text-crayola">Sharpshooter</h5>
          <p>You can add +2 bonus to attack rolls you make with ranged weapons.</p>
          <h5 className="mt-2 text-crayola">Defense</h5>
          <p>While you are wearing armor, you gain a +1 bonus to AC.</p>
          <h5 className="mt-2 text-crayola">Dueling</h5>
          <p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p>
          <h5 className="mt-2 text-crayola">Protection</h5>
          <p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a non-ranged weapon.</p>
          <h5 className="mt-2 text-crayola">Boxing</h5>
          <p>When you engage in combat without any weapon, you can add your ability modifier to the damage of the second attack.</p>

          <h4 className="my-4 h4-crayola">Second Wind</h4>
          <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use your bonus action to regain hit points equal to 1d10 + your level. Once you use this feature, you must complete a long or short rest to regain it.</p>

        </div>

        <div>

          <h4 className="my-4 h4-crayola">Focus</h4>
          <p>Roll a D20 with disadvantage and focus your hearing, based on the DC of the nearby enemies your GM will draw (or mark) on a small map where your enemies most likely are in comparison to you. Starting at level 7 you can roll with advantage instead of disadvantage.</p>

          <h4 className="my-4 h4-crayola">Action Surge</h4>
          <p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a short or long rest before you can use it again.</p>

          <h4 className="my-4 h4-crayola">Martial Archetype</h4>
          <p>At 3rd level, you choose a martial archetype to emulate: Maverick or Captain. Your choice grants you features at this level and again at 6th, 10th, and 14th level. The archetypes are described at the bottom of this section.</p>

          <h4 className="my-4 h4-crayola">Extra Attack</h4>
          <p>Beginning at 5th level, you can attack twice, instead of once,  whenever you take the Attack action during your turn.</p>

        </div>
      </div>

      <h3 className="reverse-crayola mt-6">Martial Archetypes</h3>
      <div className="class-col-layout">
        <div>
          <h4 className="my-4 h4-crayola">Captain</h4>
          <p>A Captain&apos;s job is to keep his team alive. This archetype focuses on abilities that impact the group as a whole</p>
          <h6 className="mt-2 text-crayola">Combat Superiority</h6>
          <p>When you choose this archetype at 3rd lvl, you learn maneuvers fueled by speciality dice known as superiority die.</p>
          <p><span className="text-crayola font-bold">Maneuvers:</span> learn 3 from the list below; maneuvers enhance attacks; you can only use one maneuver per attack.</p>
          <p><span className="text-crayola font-bold">Superiority Die:</span> You have 2 superiority die, which are d8s. A die is expended when used in a maneuver. You regain all used die after a long or short rest.</p>
          <p><span className="text-crayola font-bold">Saving Throws:</span> Some of your maneuvers require the target to make a saving throw to resist the maneuver&apos;s effects. The Saving Throw&apos;s DC is calculated as follows:</p>
          <ul>
            <li>DC = 8 + your proficiency bonus + Strength or Dex modifier (your choice)</li>
          </ul>
        </div>

        <div>
          <h4 className="my-4 h4-crayola">Maverick</h4>
          <p>The Maverick is a one-man army, focusing on unbeatable physical prowess.</p>
          <h6 className="mt-2 text-crayola">Improved Critical</h6>
          <p>When you choose this archetype at 3rd lvl, your weapon attacks score a critical hit with a roll of 19 or 20.</p>
        </div>
      </div>
      <h3 className="reverse-ghost mt-6">Maneuvers</h3>
      <div className="class-col-layout mt-4">
        <div>

          <h5 className="mt-2">Commander&apos;s Strike</h5>
          <p>When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack&apos;s damage roll.</p>

          <h5 className="mt-2">Disarming Attack</h5>
          <p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it&apos;s holding. You add the superiority die to the attack&apos;s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you chose. The object lands at its feet.</p>

          <h5 className="mt-2">Riposte</h5>
          <p>When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack’s damage roll.</p>

        </div>

        <div>

          <h5 className="mt-2">Maneuvering Attack</h5>
          <p>When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.</p>

          <h5 className="mt-2">Pushing Attack</h5>
          <p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, you push the target up to 15 ft away from you.</p>

        </div>
      </div>
    </>
  )
}

export default Soldier;