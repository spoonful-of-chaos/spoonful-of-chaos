export enum StatTypes {
  STR = 'Strength',
  DEX = 'Dexterity',
  CON = 'Constitution',
  INT = 'Intelligence',
  WIS = 'Wisdom',
  CHA = 'Charisma'
}

export type StatTypeKeys = keyof typeof StatTypes;

export type Stat = {
  [key in StatTypeKeys]: number;
};

export type Post = {
  categories: string,
  content: string,
  date: string,
  excerpt: string,
  id: string,
  title: string,
  link?: string,
}

export type Creature = {
  alignment: string,
  armorClass: string,
  categories: string[],
  challenge: string,
  content: string,
  hitPoints: string,
  id: string,
  languages: string,
  senses: string,
  size: string,
  speed: string,
  stats: Stat,
  title: string,
  type: string,
  immunities?: {
    damage: string,
    condition: string
  },
  resistances?: string,
  savingThrows?: string,
  skills?: string,
}