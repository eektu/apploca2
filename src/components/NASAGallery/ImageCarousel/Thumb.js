import React from 'react'

import './Thumb.css'


const Thumb = (props) => {
    return (
        <img className="carousel-thumbnail" src={props.imgUrl} alt="vista previa" />
    )
}

export default Thumb