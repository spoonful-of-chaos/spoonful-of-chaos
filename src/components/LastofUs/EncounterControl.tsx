import { useMonsters } from "@/context/monsters.context";
import { ActionTypes, useSettings } from "@/context/settings.context";
import { difficultyConfig } from "@/utils/configs";
import { generateEncounter } from "@/utils/encounters";

export const EncounterControl = () => {
  const { state, dispatch } = useSettings();
  const monsters = useMonsters();

  const monsterTypes = ['all', ...new Set(monsters.map(m => m.type))]
  
  const handleChange = (type: ActionTypes, val: number | string) => {
    dispatch({
      type: type,
      payload: val
    })
  }

  const onGenerate = () => {
    const encounters = generateEncounter(state, monsters);

    dispatch({
      type: 'monsterSets',
      payload: encounters,
    });
  } 

  return (
    <div>
      <form>
        <div className="mt-2">
          <label htmlFor="monsterType" className="block text-sm font-medium leading-6 text-white">Monster Type</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <select name="monsterType" id="monsterType" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={state.monsterType} value={state.monsterType} onChange={(e) => handleChange('monsterType', e.target.value)}>
              {monsterTypes.map((t, i) => (
                <option key={t + i}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-white">Difficulty</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <select name="difficulty" id="difficulty" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={state.difficulty} value={state.difficulty} onChange={(e) => handleChange('difficulty', e.target.value)}>
              {Object.keys(difficultyConfig).map(c => (
                <option key={difficultyConfig[c].name}>{difficultyConfig[c].name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="playerLevel" className="block text-sm font-medium leading-6 text-white">Player Level</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="playerLevel" id="playerLevel" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" value={state.playerLevel} onChange={(e) => handleChange('playerLevel', e.target.value)} />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="playerCount" className="block text-sm font-medium leading-6 text-white">Player Count</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="playerCount" id="playerCount" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={state.playerCount} placeholder="0" onChange={(e) => handleChange('playerCount', Number(e.target.value))} />
          </div>
        </div>
        <button type="button" className="standard my-6" onClick={onGenerate}>Generate</button>
      </form>
      <div className="text-black rounded p-4 bg-spoon-light">{difficultyConfig[state.difficulty].definition}</div>
    </div>
  )
}