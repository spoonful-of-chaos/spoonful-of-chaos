import { useState } from "react"

export interface FilterConfig {
  [key: string]: FilterOption
}

export interface FilterOption {
  label: string
  options: {
    [key: string]: boolean
  }
}

interface Section {
  [key: string]: boolean
}

export const Filter = ({ filters, setFilters }: { filters: FilterConfig, setFilters: Function }) => {
  const [ sections, setSections ] = useState<Section>(Object.keys(filters).reduce((acc, curr) => {
    return {...acc, [curr]: false }
  }, {}))
  
  const clickHandler = (section: string, option: string, checked: boolean) => {
    setFilters({
      ...filters,
      [section]: {
        ...filters[section],
        options: {
          ...filters[section].options,
          [option]: checked
        }
      }
    })
  }

  return (
    <div className="bg-ghost text-black rounded py-4 mb-4 px-8 break-inside-avoid-column md:grid md:grid-cols-3 md:gap-8">
      {Object.keys(sections).map((c: string) => (
        <div key={`filter-section-${c}`} className="pr-8 border-black border-r last:border-0 last:pr-0">
          <button 
            type="button"
            className="flex justify-between w-full"
            onClick={() => {
              setSections({
                ...sections,
                [c]: !sections[c]
              })
            }}
          >
            <h5>{filters[c].label}</h5>
            <span
              className={`${sections[c] && 'rotate-[-180deg]'} transition-transform duration-100`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div id={`section-${c}`}>
              {sections[c] && Object.keys(filters[c].options).map((f: string) => (
                <div key={`section-${c}-${f}`} className="mt-1">
                  <input onChange={(e) => clickHandler(c, f, e.target.checked)} id={`input-${f}`} type="checkbox" value={f} />
                  <label className="ml-2" htmlFor={`input-${f}`}>{f}</label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}