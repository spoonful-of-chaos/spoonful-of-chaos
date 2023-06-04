import { ClassHPLabels, ClassProfLabels } from "./classes";

export const BanditConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    feats: 'Expertise'
  }, {
    level: 2,
    prof: 2,
    feats: 'Where You Need to Be'
  }, {
    level: 3,
    prof: 2,
    feats: 'Bandit Archetype'
  }, {
    level: 4,
    prof: 2,
    feats: 'Ability Score Improvement'
  }, {
    level: 5,
    prof: 3,
    feats: 'Uncanny Dodge'
  }
]

export const BanditHitPoints = [
  {
    label: ClassHPLabels.hitDice,
    val: '1d8 per class level'
  }, {
    label: ClassHPLabels.firstLvlHP,
    val: 'd8 + your Constitution modifier'
  }, {
    label: ClassHPLabels.higherLvlHP,
    val: '1d8 + your Constitution modifier per class level after 1st'
  }
]

export const BanditProfs = [
  {
    label: ClassProfLabels.armor,
    val: 'none'
  }, {
    label: ClassProfLabels.weapons,
    val: 'Handguns, knives, simple weapons'
  }, {
    label: ClassProfLabels.tools,
    val: `thieves' tools`
  }, {
    label: ClassProfLabels.throw,
    val: 'Dexterity & Intelligence'
  }, {
    label: ClassProfLabels.skills,
    val: 'Choose 4 from Acrobatics, Deception, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth'
  }
];