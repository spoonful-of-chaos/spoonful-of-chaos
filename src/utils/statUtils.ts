export const calculateModifier = (score: number) => {
  const base = 10;
  const diff = score - base;
  const mod = Math.floor(diff/2);

  return `${score} (${mod >= 0 ? '+' : ''}${mod})`
}
