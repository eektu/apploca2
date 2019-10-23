import React from 'react'
import Picture from './Picture'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import NavButton from './ImageCarousel/NavButton'

import './NASAGallery.css'


function NASAGallery() {
    const objeto = {
        'color': 'blue',
        'backgroundColor': 'rgb(200, 200, 0)'
    }

    return (
        <div className="nasa-gallery-container">
            <Picture estilos={objeto} />
            <ImageCarousel />
            <NavButton label="BOTON DESCOLGADO"/>
        </div>
    )
}

export default NASAGallery