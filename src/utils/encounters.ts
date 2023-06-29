import { State } from '@/context/settings.context';

import { challengeRatingConfig, difficultyConfig, levelConfig } from './configs';
import { Creature } from '@/lib/types';

type Encounter = {
  partyPower: number,
  powerBudget: number,
  monsters: Creature[][]
}

const generateEncounter = (args: State, monsters: Creature[]): Creature[][] => {
  const encounter: Encounter = {
    partyPower: 0,
    powerBudget: 0,
    monsters: [],
  };
  // step 1: calculate party power
  encounter.partyPower = args?.playerCount * levelConfig[args?.playerLevel]

  // step 2: determine encounter power budget
  encounter.powerBudget = encounter.partyPower * difficultyConfig[args?.difficulty]?.multiplier

  // step 3: choose a group of monsters whose total power equals the encounter power budget
  let monsterList = monsters;

  if (args.monsterType !== 'all') {
    monsterList = monsters.filter((m) => m.type === args.monsterType)
  }

  encounter.monsters = [(getMonsters(encounter.powerBudget, monsterList)), (getMonsters(encounter.powerBudget, monsterList)), (getMonsters(encounter.powerBudget, monsterList))];

  return encounter.monsters;
}

const getMonsters = (powerBudget: number, allMonsters: any): Creature[] => {
  const chosenMonsters: any = [];

  for (let currentTotal = 0; currentTotal < powerBudget;) {
    const monster = allMonsters[allMonsters.length * Math.random() | 0];
    chosenMonsters.push({
      title: monster.title,
      challenge: monster.challenge,
      type: monster.type,
    })

    const monsterPowerConfig = challengeRatingConfig[monster.challenge as keyof typeof challengeRatingConfig].power;

    if (monsterPowerConfig !== undefined) {
      currentTotal = currentTotal + monsterPowerConfig
    }
  }

  return chosenMonsters.sort((a: Creature, b: Creature) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
}

export { generateEncounter };

