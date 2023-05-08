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

type MonsterConfig = {
  cr: string,
  power: number
}

export type Monster = {
  cr: string,
  name: string,
  type: string
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

export const monsterConfig: Record<string, MonsterConfig> = {
  0.125: {
    cr: "1/8",
    power: 5
  },
  0.25: {
    cr: "1/4",
    power: 10
  },
  0.50: {
    cr: "1/2",
    power: 16
  },
  1: {
    cr: "1",
    power: 22
  },
  2: {
    cr: "2",
    power: 28
  },
  3: {
    cr: "3",
    power: 37
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