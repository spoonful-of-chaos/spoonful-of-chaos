import { ActionTypes, useSettings } from "@/context/settings.context";
import { generateDay } from "@/utils/adventuringday";
import { fatigueConfig } from "@/utils/configs";

export const DayControl = () => {
  const { state, dispatch } = useSettings();

  const handleChange = (type: ActionTypes, val: number | string) => {
    dispatch({
      type: type,
      payload: val
    })
  }

  const onGenerate = () => {
    const day = generateDay(state.fatigueLevel)

    dispatch({
      type: 'daySets',
      payload: day
    })
  }

  return (
    <form>
      <div className="mt-2">
        <label htmlFor="fatigueLevel" className="block text-sm font-medium leading-6 text-white">Daily Fatigue Level</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <select name="fatigueLevel" id="fatigueLevel" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" onChange={(e) => handleChange('fatigueLevel', e.target.value)}>
            {Object.keys(fatigueConfig).map(c => (
              <option key={fatigueConfig[c].name}>{fatigueConfig[c].name}</option>
            ))}
          </select>
        </div>
      </div>
      <button type="button" className="standard my-6" onClick={onGenerate}>Generate</button>
      <div className="text-black rounded p-4 bg-spoon-light">{fatigueConfig[state.fatigueLevel].definition}</div>
    </form>
  )
}