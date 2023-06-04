import { ClassHPLabels, ClassProfLabels } from "./classes";

export const PrepperConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    feats: 'Crafting',
    cantrips: 2,
    crafts: '1 1st Lvl'
  }, {
    level: 2,
    prof: 2,
    feats: 'Recovery',
    cantrips: 3,
    crafts: '3 1st Lvl'
  }, {
    level: 3,
    prof: 2,
    feats: 'Always Ready',
    cantrips: 3,
    crafts: '3 1st Lvl, 1 2nd Lvl'
  }, {
    level: 4,
    prof: 2,
    feats: 'Ability Score Improvement',
    cantrips: 4,
    crafts: '3 1st Lvl, 2 2nd Lvl'
  }, {
    level: 5,
    prof: 3,
    feats: 'Prepper Speciality',
    cantrips: 4,
    crafts: '4 1st Lvl, 3 2nd Lvl, 1 3rd Lvl'
  }
]

export const PrepperHitPoints = [
  {
    label: ClassHPLabels.hitDice,
    val: '1d6 per class level'
  }, {
    label: ClassHPLabels.firstLvlHP,
    val: '6 + your Constitution modifier'
  }, {
    label: ClassHPLabels.higherLvlHP,
    val: '1d6 + your Constitution modifier per class level after 1st'
  }, {
    label: ClassHPLabels.craftAbility,
    val: 'Intelligence'
  }
]

export const PrepperProfs = [
  {
    label: ClassProfLabels.armor,
    val: 'none'
  }, {
    label: ClassProfLabels.weapons,
    val: 'Handguns, sniper rifles, simple weapons'
  }, {
    label: ClassProfLabels.tools,
    val: 'component pouch'
  }, {
    label: ClassProfLabels.throw,
    val: 'Intelligence & Wisdom'
  }, {
    label: ClassProfLabels.skills,
    val: 'Choose two skills from Arcana/Crafting, History, Investigation, Medicine, Perception, Survival.'
  }
];