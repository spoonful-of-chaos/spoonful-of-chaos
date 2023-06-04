import { ClassHPLabels, ClassProfLabels } from "./classes";

export const SmugglerConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    feats: "Crafting, Fighting Style",
    cantrips: 2,
    points: "-"
  },
  {
    level: 2,
    prof: 2,
    feats: "Focus, Jack of All Trades",
    cantrips: 2,
    points: "-"
  },
  {
    level: 3,
    prof: 2,
    feats: "Expertise",
    cantrips: 2,
    points: "-"
  },
  {
    level: 4,
    prof: 2,
    feats: "Ability Score Improvement, Focus Improvement",
    cantrips: 3,
    points: "-"
  },
  {
    level: 5,
    prof: 3,
    feats: "Smuggler Points",
    cantrips: 3,
    points: 2
  }
]

export const SmugglerHitPoints = [
  {
    label: ClassHPLabels.hitDice,
    val: '1d8 per class level'
  }, {
    label: ClassHPLabels.firstLvlHP,
    val: '8 + your Constitution modifier'
  }, {
    label: ClassHPLabels.higherLvlHP,
    val: '1d8 + your Constitution modifier per class level after 1st'
  }, {
    label: ClassHPLabels.craftAbility,
    val: 'Charisma'
  }
]

export const SmugglerProfs = [
  {
    label: ClassProfLabels.armor,
    val: 'none'
  }, {
    label: ClassProfLabels.weapons,
    val: 'Handguns, rifles, simple weapons, hand-to-hand'
  }, {
    label: ClassProfLabels.tools,
    val: 'none'
  }, {
    label: ClassProfLabels.throw,
    val: 'Dexterity & Charisma'
  }, {
    label: ClassProfLabels.skills,
    val: 'Choose two skills from Athletics, Arcana/Crafting, Deception, Investigation, Intimidation, Persuasion, Stealth.'
  }
];