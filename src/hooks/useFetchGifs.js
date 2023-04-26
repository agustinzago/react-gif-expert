import { useEffect, useState } from 'react';
import { getGifsByCategory } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async () => {
        const gifsResponse = await getGifsByCategory(category);
        setGifs(gifsResponse);
        setIsLoading(false)
    }

    useEffect( () => {
        getGifs();
    }, [])


    return {
        gifs,
        isLoading
    }

}
