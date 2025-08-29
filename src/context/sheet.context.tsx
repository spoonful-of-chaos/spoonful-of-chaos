import { createContext, ReactNode, useReducer } from "react";

export type ActionTypes = '';

type Action = {
  type: ActionTypes,
  payload: any,
}

type Dispatch = (action: Action) => void;

export type SheetState = {}

type ProviderProps = { children: ReactNode }

const SheetContext = createContext<
  {state: SheetState, dispatch: Dispatch} | undefined
>(undefined);

const sheetReducer = (state: SheetState, action: Action) => {
  switch (action.type) {
    default: {
      console.error(`Unhandled action type: ${action.type}`)
      return state;
    }
  }
}

const defaultState: SheetState = {}

const SheetProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(sheetReducer, defaultState);
  const value = { state, dispatch };
  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>
}