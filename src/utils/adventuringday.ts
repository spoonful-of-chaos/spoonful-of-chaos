import { difficultyConfig, fatigueConfig } from "./configs";

export const generateDay = (fatigueLevel: string): string[][] => {
  const fatigueBudget = fatigueConfig[fatigueLevel].cost;
  return [getDifficulties(fatigueBudget), getDifficulties(fatigueBudget), getDifficulties(fatigueBudget)];
}

const getDifficulties = (budget: number): string[] => {
  const allDifficulties = Object.keys(difficultyConfig);
  const chosenDifficulties: string[] = [];

  for (let currentTotal = 0; currentTotal < budget;) {
    const diff = allDifficulties[allDifficulties.length * Math.random() | 0];
    chosenDifficulties.push(difficultyConfig[diff].name);

    currentTotal = currentTotal + difficultyConfig[diff].cost;
  }

  return chosenDifficulties.sort();
}