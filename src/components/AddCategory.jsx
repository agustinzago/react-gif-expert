import {PropTypes} from 'prop-types';
import { useState } from 'react';


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return ( 
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type='text'
                placeholder='Buscar GIFs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}