import { getGifsByCategory } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => { 
   
    test('getGifs debe de retornar un arreglo de gifs ', async() => { 
        
        const gifs = await getGifsByCategory('One Piece');
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String) ,
            url: expect.any(String)
        });
     });
 });
 