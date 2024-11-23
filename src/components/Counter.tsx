import { useCount } from '../hooks/useCount'

const Counter = () => {
    const { count, increment, decrement } = useCount()

    return (
        <div>
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter