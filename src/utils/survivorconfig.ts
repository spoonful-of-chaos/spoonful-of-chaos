import { ClassHPLabels, ClassProfLabels } from "./classes";

export const SurvivorConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    feats: 'Favored Enemy, Focus',
    crafts: '-'
  }, {
    level: 2,
    prof: 2,
    feats: 'Fighting Style, Crafting',
    crafts: '1 1st Lvl'
  }, {
    level: 3,
    prof: 2,
    feats: 'Favored Terrain',
    crafts: '2 1st Lvl'
  }, {
    level: 4,
    prof: 2,
    feats: 'Ability Score Improvement, Focus Improvement',
    crafts: '2 1st Lvl, 1 2nd Lvl'
  }, {
    level: 5,
    prof: 3,
    feats: 'Survivor Archetype',
    crafts: '2 1st Lvl, 2 2nd Lvl'
  }
]

export const SurvivorHitPoints = [
  {
    label: ClassHPLabels.hitDice,
    val: '1d10 per class level'
  }, {
    label: ClassHPLabels.firstLvlHP,
    val: '10 + your Constitution modifier'
  }, {
    label: ClassHPLabels.higherLvlHP,
    val: '1d10 + your Constitution modifier per class level after 1st'
  }, {
    label: ClassHPLabels.craftAbility,
    val: 'Charisma'
  }
]

export const SurvivorProfs = [
  {
    label: ClassProfLabels.armor,
    val: 'none'
  }, {
    label: ClassProfLabels.weapons,
    val: 'Bows, simple weapons, hand-to-hand'
  }, {
    label: ClassProfLabels.tools,
    val: 'bushcraft kit'
  }, {
    label: ClassProfLabels.throw,
    val: 'Strength & Wisdom'
  }, {
    label: ClassProfLabels.skills,
    val: 'Choose 3 skills from, Athletics, Animal Handling, Insight, Investigation, Medicine, Perception, Stealth, Survival.'
  }
];