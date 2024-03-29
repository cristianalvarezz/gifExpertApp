import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //sirve para memorizar funciones 
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );
    useEffect(() => {
        //  incrementFather();
    }, [incrementFather])

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>

    )
}
