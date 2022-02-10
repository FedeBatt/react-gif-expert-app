import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Welcome']);

    const handleAdd = () => {
        setCategories([...categories]);
    }

    return (
        <div className='gif-app'>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories && categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
                }
            </ol>
        </div>
    );
}
export default GifExpertApp;
