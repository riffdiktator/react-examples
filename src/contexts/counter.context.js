import { createContext, useState } from "react";

export const CounterContext = createContext({
    counter: 0,
    setCounter: () => null
})

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
    const value = {counter, setCounter}

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}