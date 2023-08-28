import { React } from "react";
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
// React.memo = se usa para memorizar un valor cuando el argumento de la función encerrada en ( ) es el mismo/no cambia.

// useMemo() = se usa para memorizar un valor cuando una o mas dependencias mantienen su valor/no cambian. El primer argumento es la función/callback que se vuelve a ejecutar si estas dependencias cambian. Devuelve una forma memorizada de la función.

// useCallback() = se usa para mantener la referencia a una función (se puede decir que se mantiene la posición de memoria de esa función) siempre que sus dependencias se mantengan/no cambien. Devuelve una versión memorizada de la función que se le coloque, que será usada en otros lugares del código.