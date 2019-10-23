import React from 'react'

import NavButton from './NavButton'
import Thumb from './Thumb'


function ImageCarousel() {
    return (
        <div>
            <NavButton label="<" />
            <Thumb />
            <Thumb />
            <Thumb />
            <Thumb />
            <Thumb />
            <NavButton label=">"/>
        </div>
    )
}

export default ImageCarousel