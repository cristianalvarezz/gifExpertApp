import { renderHook,act } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";

describe('pruebas en el useConter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrement, increment, reset } = result.current
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current
        expect(counter).toBe(100);
    })
    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, increment } = result.current
        act(()=>{
            increment();
            // increment(3);
        })
        expect(result.current.counter).toBe(101)

    })
    test('debe de decrement el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, decrement } = result.current
        act(()=>{
            decrement();
        })
        expect(result.current.counter).toBe(99)
    })
    test('debe de realizar el reset', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, reset,increment } = result.current
        act(()=>{
            increment(3);
            reset();
        })
        expect(result.current.counter).toBe(10)
    })
})