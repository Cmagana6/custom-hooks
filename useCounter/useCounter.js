import { useEffect, useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = (value = 1)=>{
        setCounter((current)=>current+value)
    }

    const resetCounter = ()=>{
        setCounter((current)=>current=initialValue)
    }

    const decrementCounter = (value = 1)=>{
        if(counter === 0 ) return
        setCounter((current)=>current-value)
    }

    return {
        counter,
        incrementCounter,
        resetCounter,
        decrementCounter
    }
}