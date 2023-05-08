import { ReactNode, createContext, useContext } from 'react';
import { monsters } from '../data';

type ProviderProps = { children: ReactNode }

type Action = {
  type: any,
  payload: any,
}

type Dispatch = (action: Action) => void;

type State = {
  [key: string]: string
}

const value: any[] = [...Object.keys(monsters).map(m => monsters[m as keyof typeof monsters])];

const MonsterContext = createContext(value);

const MonsterProvider = ({ children }: ProviderProps) => {
  return <MonsterContext.Provider value={value}>{children}</MonsterContext.Provider>
};

const useMonsters = () => {
  const context = useContext(MonsterContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context;
};

export {
  useMonsters,
  MonsterProvider,
};

