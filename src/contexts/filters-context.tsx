import React from 'react'
import { UPDATE_SELECTED_CITY } from '../constants/actions'

const FiltersStateContext = React.createContext(undefined)
const FiltersDispatchContext = React.createContext(undefined)

function cityReducer(state, action) {
  switch (action.type) {
    case UPDATE_SELECTED_CITY: {
      return { ...state, cityId: action.cityId }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface FiltersProviderProps {
  children: React.ReactNode
}

function FiltersProvider({ children }: FiltersProviderProps) {
  const [state, dispatch] = React.useReducer(cityReducer, {
    cityId: null,
  })

  return (
    <FiltersStateContext.Provider value={state}>
      <FiltersDispatchContext.Provider value={dispatch}>
        {children}
      </FiltersDispatchContext.Provider>
    </FiltersStateContext.Provider>
  )
}

function useFiltersState() {
  const context = React.useContext(FiltersStateContext)

  if (context === undefined) {
    throw new Error('useFiltersState must be used within a FiltersProvider')
  }

  return context
}

function useFiltersDispatch() {
  const context = React.useContext(FiltersDispatchContext)

  if (context === undefined) {
    throw new Error('useFiltersDispatch must be used within a FiltersProvider')
  }

  return context
}

export { FiltersProvider, useFiltersState, useFiltersDispatch }
