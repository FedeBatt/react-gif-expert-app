import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    return (
        <div>
            <h3> {category} </h3>
            {!images && <p>Caca</p>}
            {loading ? <p>Loading...</p> :
                <div className='gif-grid'>
                    {images && images.map(gif => (
                        <GifGridItem key={gif.id} {...gif} />
                    ))
                    }
                </div>
            }
        </div>
    )
};
