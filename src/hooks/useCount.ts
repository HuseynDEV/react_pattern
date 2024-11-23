import { useCallback, useEffect, useState } from "react";


function initialCount() {
    const savedCount = localStorage.getItem("count")
    return savedCount ? Number(savedCount) : 0
}

export function useCount() {
    const [count, setCount] = useState<number>(initialCount)

    useEffect(() => {
        return localStorage.setItem('count', count.toString())
    }, [count])

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [])

    return {
        count, increment, decrement
    }

}