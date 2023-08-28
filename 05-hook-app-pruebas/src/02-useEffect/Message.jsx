import { useState, useEffect } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {
        const onMouseMove = ({x,y})=>{
            setCoords({ x,y })
        }
        window.addEventListener('mousemove',onMouseMove);

        return () => {
            window.removeEventListener('mousemove',onMouseMove);
        }
    }, [third])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>

    )
}
