import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from '../constants/actions'
import { useReducer } from 'react'

interface State {
  counter: number
}

interface Action {
  type: string
  value?: number
}

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return { counter: state.counter + 1 }
    }

    case DECREMENT_COUNTER: {
      return { counter: state.counter <= 1 ? 0 : state.counter - 1 }
    }

    case RESET_COUNTER: {
      return { counter: action.value || 0 }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

type ReturnType = [State, () => void, () => void, () => void]

export default function useCounter(initialState?: number): ReturnType {
  const [state, dispatch] = useReducer(counterReducer, {
    counter: initialState || 0,
  })

  function incrementCounter() {
    dispatch({ type: INCREMENT_COUNTER })
  }

  function decrementCounter() {
    dispatch({ type: DECREMENT_COUNTER })
  }

  function resetCounter() {
    dispatch({ type: RESET_COUNTER, value: initialState })
  }

  return [state, incrementCounter, decrementCounter, resetCounter]
}
