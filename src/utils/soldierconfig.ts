import { ClassHPLabels, ClassProfLabels } from "./classes";

export const SoldierConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    feats: 'Fighting Style, Second Wind'
  }, {
    level: 2,
    prof: 2,
    feats: 'Focus, Action Surge'
  }, {
    level: 3,
    prof: 2,
    feats: 'Martial Archetype'
  }, {
    level: 4,
    prof: 2,
    feats: 'Ability Score Improvement'
  }, {
    level: 5,
    prof: 3,
    feats: 'Extra Attack'
  }
]

export const SoldierHitPoints = [
  {
    label: ClassHPLabels.hitDice,
    val: '1d10 per class level'
  }, {
    label: ClassHPLabels.firstLvlHP,
    val: '10 + your Constitution modifier'
  }, {
    label: ClassHPLabels.higherLvlHP,
    val: '1d10 + your Constitution modifier per class level after 1st'
  }
]

export const SoldierProfs = [
  {
    label: ClassProfLabels.armor,
    val: 'light, medium'
  }, {
    label: ClassProfLabels.weapons,
    val: 'Handguns, mid-range, simple weapons, bows, hand-to-hand'
  }, {
    label: ClassProfLabels.tools,
    val: 'navigator kit'
  }, {
    label: ClassProfLabels.throw,
    val: 'Strength & Consitution'
  }, {
    label: ClassProfLabels.skills,
    val: 'Choose two skills from Athletics, Animal Handling, Intimidation, Perception, Survival'
  }
];