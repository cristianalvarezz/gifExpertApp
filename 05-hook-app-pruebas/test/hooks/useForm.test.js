import { renderHook,act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('pruebas en useForm', () => {
    const initialForm = {
        name:"Christian",
        email:"alvarez@getDefaultNormalizer.com"
    }
    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name:initialForm.name,
            email:initialForm.email,
            formState:initialForm,
            onInputChange:expect.any( Function ),
            onResetForm:expect.any( Function ),
        });
    })
    test(' debe de cambiar el nombre del formulario', () => {
        const newValue = "juan"
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } =result.current
        act(()=>{
            onInputChange({target:{
                name:"name",
                value:newValue
            }})
        })
        expect(result.current.name).toEqual(newValue);
        expect(result.current.formState.name).toEqual(newValue);
    })
    test('debe de realizar el reset del formulario', () => {
        const newValue = "juan"
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange,onResetForm } =result.current
        act(()=>{
            onInputChange({target:{
                name:"name",
                value:newValue
            }})
            onResetForm()
        })
        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);
    })
})