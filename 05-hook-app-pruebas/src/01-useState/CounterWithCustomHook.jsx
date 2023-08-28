

import { useCounter } from '../hooks/useCounter.js';
export const CounterWithCustomHook = () => {
    //lo estoy desestructurando como un objeto para desestructurarlo
    const { counter,increment,decrement,reset } = useCounter()

    return (
        <>
        <h1> Couenter with Hook : { counter } </h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increment(4)}>1+</button>
        <button className="btn btn-primary" onClick={ reset }>reset</button>
        <button className="btn btn-primary"  onClick={ () => decrement(2) }>1-</button>
        </>
    )
}
