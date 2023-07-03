import { ClassBreadcrumb } from "@/components/LastofUs/ClassBreadcrumb";
import { BanditConfig, BanditHitPoints, BanditProfs } from "@/utils/banditconfig";

const Bandit = () => {
  return (
    <>
      <ClassBreadcrumb />
      <h1 className="reverse-spoon mb-4">Bandit</h1>
      <div className="class-col-layout">
        <div>
          <p>A thin man sneaks along the edge of the QZ perimeter. The guard looks away for a few seconds, but that&apos;s all it takes for him to step silently to the gate, deftly unlock the door, and slip outside into the night.</p>
          <p>A young girl leans into the shadow of a wall. The raider sets down his cup just for a moment, and she darts forward, dumping a small package of powder into the liquid, before dashing back out of sight soundlessly. The raider turns back, takes another sip, then gags, turns purple, and collapses.</p>
          <p>The young man grins and dances back lightly as his opponent takes another swing and misses. He advances, striking his opponent&apos;s jaw before again stepping out of reach. He laughs and turns to the crowd cheering before spinning and again avoiding his opponent&apos;s attack.</p>
        </div>
        <div>
        <h2>Skill & Precision</h2>
          <p>The bandit knows that staying alive inside or outside a QZ means being quick, flexible, and most of all, quiet. Maybe the job is picking a few locks to get someone access to a military cache, or maybe it&apos;s putting a knife in the back of that rival smuggler: the bandit has the flexible skill set to cover them all.</p>
          <h2 className="reverse-spoon">Creating a Bandit</h2>
          <p>Are you a thief always looking for your next score? Or just someone learning anything they can to survive? Where did your natural agility come from? When creating a bandit, consider if they&apos;ve lived most of their life within a quarantine zone or if they prefer operating outside those protective walls.</p>
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
            {BanditConfig.map((c: Record<string, string | number>, i: number) => (
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
      <p>As a Bandit, you gain the following class features.</p>

      <div className="class-col-layout mt-4">
        <div>
          <h4 className="h4-moon">Hit Points</h4>
          <table className="w-full">
            <tbody>
              {BanditHitPoints.map((c, i) => (
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
              {BanditProfs.map((c, i) => (
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
        <li>(a) a hunting knife or (b) a 5x shivs</li>
        <li>(a) a baseball bat or (b) 2x bandages</li>
        <li>(a) 2x rags (b) a thieves&apos; tools which contain:</li>
        <ul>
          <li>a set of lock picks</li>
          <li>a pair of pliers</li>
          <li>5 ft of thin wire</li>
        </ul>
      </ul>

      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Expertise</h4>
          <p>Choose 2 of your skill proficiencies. Your proficiency modifier is doubled for any ability check you make with that skill.</p>

          <h4 className="my-4 h4-crayola">Where You Need to Be</h4>
          <p>You can take a bonus action on each of your turns in combat. This action can only be taken to Dash, Disengage, or Hide.</p>

          <h4 className="my-4 h4-crayola">Bandit Archetype</h4>
          <p>At 3rd level, you choose a bandit archetype to emulate: Raider, Killer, or Swashbuckler. Your choice grants you features at this level and again at 6th, 10th, and 14th level. The archetypes are described at the bottom of this section.</p>
        </div>
        <div>

          <h4 className="my-4 h4-crayola">Uncanny Dodge</h4>
          <p>When an attacker you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.</p>

          <h4 className="my-4 h4-crayola">Ability Score Improvement</h4>
          <p>When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.</p>

        </div>
      </div>

      <h3 className="reverse-crayola mt-6">Bandit Archetypes</h3>
      <div className="class-col-layout">
        <div>

          <h4 className="my-4 h4-crayola">Raider</h4>
          <p>Raiders are at home in most cityscapes, learning to navigate the broken ruins of the pre-infected world.</p>
          <h6 className="mt-2 text-crayola">Fast Hands</h6>
          <p>Starting at 3rd lvl, you can use your Where You Need to Be bonus action to make a Dexterity (sleight of hand) check, use your thieves&apos; tools to disarm a trap or open a lock, or use an object.</p>
          <h6 className="mt-2 text-crayola">Second-Story Work</h6>
          <p>Starting at 3rd lvl, you gain the ability to climb faster than usual; climbing no longer costs additional movement. Additionally, when you make a running jump, the distance you cover increases by a number of feet equal to your Dex modifier.</p>

          <h4 className="my-4 h4-crayola">Killer</h4>
          <p>It&apos;s too common nowadays to need someone, or something, dead.</p>
          <h6 className="mt-2 text-crayola">Bonus Proficiencies</h6>
          <p>When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and poisoner&apos;s kit.</p>
          <h6 className="mt-2 text-crayola">Quick on the Draw</h6>
          <p>Starting at 3rd lvl, you have advantage on any attack rolls made against a creature that has not taken a turn in combat yet. Any hit you make against a creature who is surprised is a critical hit.</p>

        </div>
        <div>

          <h4 className="my-4 h4-crayola">Swashbuckler</h4>
          <p>You focus your training on an acrobatic and flashy fighting style.</p>
          <h6 className="mt-2 text-crayola">Fancy Footwork</h6>
          <p>When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can&apos;t make opportunity attacks against you for the rest of your turn.</p>
          <h6 className="mt-2 text-crayola">Rakish Audacity</h6>
          <p>Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.</p>
          <p>You also gain an additional way to use Sneak Attack; you can perform a Sneak Attack if an ally is within 5 feet of a target, no other creatures are within 5 feet of you, and you don’t have disadvantage on the attack roll.</p>

        </div>
      </div>
    </>
  )
}

export default Bandit;