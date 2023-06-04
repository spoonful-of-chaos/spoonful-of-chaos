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