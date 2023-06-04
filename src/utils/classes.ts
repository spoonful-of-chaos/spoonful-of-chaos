export const classes: Record<string, Record<string, string>> = {
  smuggler: {
    description: 'A charismatic fighter with a few tricks up their sleeve.',
    hd: 'd8',
    primary: 'Charisma',
    throw_prof: 'Dexterity & Charisma',
    armor_prof: 'Handguns, rifles, simple weapons, hand-to-hand'
  },
  survivor: {
    description: 'A master of survival within and outside of quarantine zones.',
    hd: 'd10',
    primary: 'Wisdom',
    throw_prof: 'Strength & Wisdom',
    armor_prof: 'Bow, simple weapons, hand-to-hand'
  },
  prepper: {
    description: 'A long-term planner with an arsenal of traps, tricks, and other craftables.',
    hd: 'd6',
    primary: 'Intelligence',
    throw_prof: 'Intelligence & Wisdom',
    armor_prof: 'Handguns, rifles, simple weapons'
  },
  soldier: {
    description: 'A combat specialist trained in a variety of abilities.',
    hd: 'd10',
    primary: 'Strength',
    throw_prof: 'Strength & Constitution',
    armor_prof: 'Handguns, mid-range firearms, simple weapons, bows, hand-to-hand'
  },
  bandit: {
    description: 'A quick and quiet rogue who uses stealth and skill to solve problems.',
    hd: 'd8',
    primary: 'Dexterity',
    throw_prof: 'Dexterity & Intelligence',
    armor_prof: 'Simple weapons, knives, handguns'
  }
}

export const ClassHPLabels = {
  hitDice: 'Hit Dice:',
  firstLvlHP: 'Hit Points at 1st Level:',
  higherLvlHP: 'Hit Points at Higher Levels:',
  craftAbility: 'Item Crafting Ability:'
}

export const ClassProfLabels = {
  armor: 'Armor:',
  weapons: 'Weapons:',
  tools: 'Tools:',
  throw: 'Saving Throws:',
  skills: 'Skills:'
}

export const SmugglerConfig: Record<string, string | number>[] = [
  {
    level: 1,
    prof: 2,
    features: "Crafting, Fighting Style",
    cantrips: 2,
    points: "-"
  },
  {
    level: 2,
    prof: 2,
    features: "Focus, Jack of All Trades",
    cantrips: 2,
    points: "-"
  },
  {
    level: 3,
    prof: 2,
    features: "Expertise",
    cantrips: 2,
    points: "-"
  },
  {
    level: 4,
    prof: 2,
    features: "Ability Score Improvement, Focus Improvement",
    cantrips: 3,
    points: "-"
  },
  {
    level: 5,
    prof: 3,
    features: "Smuggler Points",
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
    val: 'Choose two skills from Athletics, Arcana/Crafting, Deception, Investigation, Intimidation, Persuasion, Stealth'
  }
];