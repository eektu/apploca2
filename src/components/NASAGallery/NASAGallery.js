import React from 'react'
import Picture from './Picture'
import ImageCarousel from './ImageCarousel/ImageCarousel'

import './NASAGallery.css'


function NASAGallery() {
    return (
        <div className="nasa-gallery-container">
            <Picture />
            <ImageCarousel />
        </div>
    )
}

export default NASAGallery