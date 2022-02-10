import React from 'react'

export const GifGridItem = ({id, title, img}) => {
  return (
    <div className='grid-item animate__animated animate__fadeIn'>
        <img src={ img } alt={title}/>
        <h4>{title}</h4>
    </div>
  )
}
