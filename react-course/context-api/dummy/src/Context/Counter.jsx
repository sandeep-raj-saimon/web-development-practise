// First I need to create a context

import { createContext, useState } from "react";

export const counterContext = createContext()

export const CounterContextProvider =  ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <counterContext.Provider value={{ count, setCount }}>
            {children}
        </counterContext.Provider>
    )
}