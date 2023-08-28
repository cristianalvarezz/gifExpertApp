import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    test('debe retornar un string y un numero',()=>{
        const [letras,numeros] = retornaArreglo(); // ['ABC',123]
        // expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        //aqui espero cualquier tipo de string
        expect(letras).toEqual(expect.any(String))
    })
})