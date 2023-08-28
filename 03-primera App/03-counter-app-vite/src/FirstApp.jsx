

import PropTypes from "prop-types";
const newMessage = {
    message: 'Hola mundo',
    title: 'Christian'
}
const getResult = (a, b) => a + b;
export const FirstApp = ({
    title, 
    subTitle,
    name
}) => {
    // if(!title){
    //     throw new Error('El titulo es necesario');
    // }

    return (
        <>
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
            <h1>{name}</h1>
            {/* <h1>{getResult(1,1)}</h1> */}
            {/* {<code>{JSON.stringify(newMessage)}</code>} */}
            {/* <p>{subTitle + 1}</p> */}
        </>
    )

}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}
FirstApp.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 0,
    name:"Christian",
}