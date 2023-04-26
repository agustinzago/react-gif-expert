import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
   
    test('GifItem deberia coincidir con el snapshot', () => {         
        const container = render( <GifItem title={title} url={url}/>)
        
        expect(container).toMatchSnapshot();
     });

     test('Debe de mostrar la imagen con el url y el ALT indicado', () => { 
        const container = render( <GifItem title={title} url={url}/>);
        
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);


      })

      test('Debe de mostrar el titulo en el componente', () => { 
        
       })

 });