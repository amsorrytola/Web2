import { createContext,useContext } from "react";

export const CounterContext = createContext({
    count: 0,
    add: ()=>{},
    sub: ()=>{},
    reset: ()=>{},
})

export const CountProvider = CounterContext.Provider

export default function useCount(){
    return useContext(CounterContext)
}