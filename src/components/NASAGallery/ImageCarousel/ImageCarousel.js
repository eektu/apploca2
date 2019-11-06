import React from 'react'

import NavButton from './NavButton'
import Thumb from './Thumb'


const ImageCarousel = (props) => {
    return (
        <div>
            <NavButton label="<" />
            <Thumb imgUrl={props.imgData[0]} />
            <Thumb imgUrl={props.imgData[1]} />
            <Thumb imgUrl={props.imgData[2]} />
            <Thumb imgUrl={props.imgData[3]} />
            <Thumb imgUrl={props.imgData[4]} />
            <NavButton label=">"/>
        </div>
    )
}

export default ImageCarousel