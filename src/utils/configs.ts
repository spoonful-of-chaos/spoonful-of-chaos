import { Difficulities, FatigueLevels } from "@/context/settings.context";

type DifficultyConfig = {
  name: Difficulities,
  multiplier: number,
  cost: number,
  definition: string,
}

type FatigueConfig = {
  name: FatigueLevels,
  cost: number,
  definition: string,
}

export type Ability = {
  name: string,
  description: string,
}

export const difficultyConfig: Record<string, DifficultyConfig> = {
  mild: {
    name: 'mild',
    multiplier: 0.40,
    cost: 2,
    definition: 'The PCs will win without a scratch.'
  },
  bruising: {
    name: 'bruising',
    multiplier: 0.60,
    cost: 4,
    definition: 'The PCs will win with minor injuries.'
  },
  bloody: {
    name: 'bloody',
    multiplier: 0.75,
    cost: 6,
    definition: 'The PCs will win with major injuries.'
  },
  brutal: {
    name: 'brutal',
    multiplier: 0.90,
    cost: 8,
    definition: 'The PCs will win but some may fall unconscious.'
  },
  oppressive: {
    name: 'oppressive',
    multiplier: 1.00,
    cost: 10,
    definition: 'The PCs can only win with a little luck or skill.'
  }
}

export const fatigueConfig: Record<string, FatigueConfig> = {
  light: {
    name: 'light',
    cost: 2,
    definition: 'The PCs will use few resources.'
  },
  moderate: {
    name: 'moderate',
    cost: 4,
    definition: 'The PCs will use some resources.'
  },
  taxing: {
    name: 'taxing',
    cost: 6,
    definition: 'The PCs will use a large minority of their resources.'
  },
  draining: {
    name: 'draining',
    cost: 9,
    definition: 'The PCs will use a majority of their resources.'
  },
  debilitating: {
    name: 'debilitating',
    cost: 12,
    definition: 'The PCs will use nearly all of their resources.'
  },
  exhausting: {
    name: 'exhausting',
    cost: 15,
    definition: 'The PCs will use all of their resources.'
  }
}
export const levelConfig: Record<string, number> = {
  "1": 11,
  "2": 14, 
  "3": 18,
  "4": 23,
  "5": 32,
  "6": 35,
  "7": 41,
  "8": 44,
  "9": 49,
  "10": 53,
  "11": 62,
  "12": 68,
  "13": 71,
  "14": 74,
  "15": 82,
  "16": 84,
  "17": 103,
  "18": 119,
  "19": 131,
  "20": 141
}

export const challengeRatingConfig = {
  '0': {
    xp: 10,
    power: 0,
  },
  '1/8': {
    xp: 25,
    power: 5
  },
  '1/4': {
    xp: 50,
    power: 10,
  },
  '1/2': {
    xp: 100,
    power: 16
  },
  '1': {
    xp: 200,
    power: 22
  },
  '2': {
    xp: 450,
    power: 28
  } 
}