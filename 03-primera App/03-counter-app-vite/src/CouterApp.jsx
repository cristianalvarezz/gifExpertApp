
import { useState } from 'react'
import PropTypes from "prop-types";



export const CouterApp = ({
    value
}) => {
    const [counter, setCounter] = useState(value)
    const handleAdd = () => {
        setCounter(counter + 1)
        // setCounter((c)=>c+1)
    }
    const handleSubtract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>CouterApp</h1>
            <h1>{counter}</h1>
            {/* <button onClick={ (event)=>handleAdd(event,'Hola') }> */}
            <button onClick={handleAdd}> 1+ </button>
            <button onClick={handleSubtract}> 1- </button>
            <button onClick={handleReset}> reset </button>
        </>
    )

}
CouterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
