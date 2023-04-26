import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en useFetchGifs.js', () => { 
    
    test('Deberia de retornar el estado inicial', () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const {gifs, isLoading} = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })

    test('Deberia de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        );

        const {gifs, isLoading} = result.current;
        
        expect(gifs.length).toBeGreaterthan(0);
        expect(isLoading).toBeFalsy();
    })
 })