import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('funciones 05-Funciones', () => {
    test('getSaludo debe de retornar el mismo objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(user).toEqual(testUser);
    })

    test('getUsuarioActivo debe de retornar un objeto', () =>{
        const name ='Christian'
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo(name)
        expect(user).toEqual(testUser);
    })
})