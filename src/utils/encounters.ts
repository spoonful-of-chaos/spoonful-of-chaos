import { State } from '@/context/settings.context';

import { Monster, difficultyConfig, levelConfig, monsterConfig } from './configs';

type Encounter = {
  partyPower: number,
  powerBudget: number,
  monsters: Monster[][]
}

const generateEncounter = (args: State, monsters: Monster[]): Monster[][] => {
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

const getMonsters = (powerBudget: number, allMonsters: any): Monster[] => {
  const chosenMonsters: any = [];

  for (let currentTotal = 0; currentTotal < powerBudget;) {
    const monster = allMonsters[allMonsters.length * Math.random() | 0];
    chosenMonsters.push({
      name: monster.name,
      cr: monster.cr,
      type: monster.type,
    })

    const monsterPowerConfig = Object.keys(monsterConfig).find(m => monsterConfig[m].cr === monster.cr)

    if (monsterPowerConfig !== undefined) {
      currentTotal = currentTotal + monsterConfig[monsterPowerConfig].power
    }
  }

  return chosenMonsters.sort((a: Monster, b: Monster) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
}

export { generateEncounter };

