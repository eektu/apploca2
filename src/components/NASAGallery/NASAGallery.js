import React from 'react'
import Picture from './Picture'
import ImageCarousel from './ImageCarousel/ImageCarousel'

import './NASAGallery.css'


class NASAGallery extends React.Component {

    state = {
        isLoading: true,
        data: null
    }

    fetchNASAData = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                
                this.setState({ 
                    data: json,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.fetchNASAData()
    }

    render() {
        if (this.state.isLoading){
            return (
                <div>Estamos haciendo la pegada al servidor</div>
            )
        }

        return (
            <div className="nasa-gallery-container">
                <Picture imgUrl={this.state.data.url} />
                <ImageCarousel />
            </div>
        )
    }
}

export default NASAGallery