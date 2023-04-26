import { render, screen } from '@testing-library/react';
import {GifGrid} from '/Users/agustinzago/Desktop/React/04-gif-expert-app/src/components/GifGrid.jsx'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
     })

     test('Debe de mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https//localhost/saitama.jpg',
            },
            {
            id: 'ABCD',
            title: 'Goku',
            url: 'https//localhost/Goku.jpg'
            }];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

      })
 })