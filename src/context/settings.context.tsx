import { Monster } from '@/utils/configs';
import { ReactNode, createContext, useContext, useReducer } from 'react';

export type ActionTypes = 'roomCount' | 'floorCount' | 'monsterSets' | 'difficulty' | 'playerLevel' | 'fatigueLevel' | 'playerCount' | 'daySets' | 'monsterType'
export type Difficulities = 'mild' | 'bruising' | 'bloody' | 'brutal' | 'oppressive'
export type FatigueLevels = 'light' | 'moderate' | 'taxing' | 'draining' | 'debilitating' | 'exhausting'
export type MonsterTypes = 'human' | 'infected' | 'all'

type Action = {
  type: ActionTypes,
  payload: any,
}
type Dispatch = (action: Action) => void;
export type State = {
  roomCount: number,
  floorCount: number,
  difficulty: Difficulities
  monsterSets: Monster[][],
  daySets: string[][],
  playerLevel: number,
  playerCount: number,
  fatigueLevel: string,
  monsterType: MonsterTypes,
}
type ProviderProps = { children: ReactNode }

const SettingsContext = createContext<
  {state: State, dispatch: Dispatch} | undefined
>(undefined);

const settingsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'roomCount': {
      return {
        ...state,
        roomCount: action.payload,
      }
    }
    case 'floorCount': {
      return {
        ...state,
        floorCount: action.payload,
      }
    }
    case 'monsterSets': {
      return {
        ...state,
        monsterSets: action.payload,
      }
    }
    case 'difficulty': {
      return {
        ...state,
        difficulty: action.payload,
      }
    }
    case 'playerLevel': {
      return {
        ...state,
        playerLevel: action.payload
      }
    }
    case 'playerCount': {
      return {
        ...state,
        playerCount: action.payload
      }
    }
    case 'fatigueLevel': {
      return {
        ...state,
        fatigueLevel: action.payload
      }
    }
    case 'daySets': {
      return {
        ...state,
        daySets: action.payload
      }
    }
    case 'monsterType': {
      return {
        ...state,
        monsterType: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const defaultState: State = {
  roomCount: 5,
  floorCount: 1,
  difficulty: 'mild',
  monsterSets: [],
  daySets: [],
  playerLevel: 1,
  playerCount: 5,
  fatigueLevel: 'light',
  monsterType: 'all'
}

const SettingsProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(settingsReducer, defaultState);
  const value = { state, dispatch };
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
};

const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context;
};

export {
  useSettings,
  SettingsProvider,
};

