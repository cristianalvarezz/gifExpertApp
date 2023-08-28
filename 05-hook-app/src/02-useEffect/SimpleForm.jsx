import { useState, useEffect } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'alvarez@gmail.com'
    });
    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    useEffect(() => {
        // console.log("useEffect called! una vez");
        //condiciones para que el use efect se vuelva a disparar 
        // [] > solo se llamara una vez
    }, []);
    useEffect(() => {
        // console.log("formState changefd");
    }, [setFormState]);

    useEffect(() => {
        // console.log("email changed");
    }, [email]);
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" className='form-control'
                placeholder='Username' name='username' value={username} onChange={onInputChange} />
            <input type="email" className='form-control mt-2'
                placeholder='alvarez@gmail.com' name='email' value={email} onChange={onInputChange} />

            {
                (username === 'strider2') && <Message />
            }
            
        </>

    )
}
