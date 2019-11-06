import React from 'react'
import Picture from './Picture'
import ImageCarousel from './ImageCarousel/ImageCarousel'

import './NASAGallery.css'


class NASAGallery extends React.Component {

    state = {
        isLoading: true,
    }

    /*
    {
        isLoading: true o false,
        '2019-11-06': null o {...}
        '2019-11-05': null o {...}
        '2019-11-04':
    }
    */

    fetchNASAData = (date="2019-11-06", apiKey="b04xlM1fWlGgcmQGGreHC46klN7kEcmFCT6I3UYB") => {
        let dateParam = '';
        
        if(date){
            dateParam = "date=" + date + "&"
        }

        const url = `https://api.nasa.gov/planetary/apod?${dateParam}api_key=${apiKey}`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                
                this.setState({ 
                    [ date ]: json,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.fetchNASAData()
        this.fetchNASAData('2019-11-05')
        this.fetchNASAData('2019-11-04')
        this.fetchNASAData('2019-11-03')
        this.fetchNASAData('2019-11-02')
    }

    render() {
        console.log(this.state)
        if (this.state.isLoading){
            return (
                <div>Estamos haciendo la pegada al servidor</div>
            )
        }
        

        const pictures = [
            this.state['2019-11-02'] ? this.state['2019-11-02'].url : '',
            this.state['2019-11-03'] ? this.state['2019-11-03'].url : '',
            this.state['2019-11-04'] ? this.state['2019-11-04'].url : '',
            this.state['2019-11-05'] ? this.state['2019-11-05'].url : '',
            this.state['2019-11-06'] ? this.state['2019-11-06'].url : ''
        ]

        return (
            <div className="nasa-gallery-container">
                <Picture imgUrl={this.state['2019-11-06'] ? this.state['2019-11-06'].url : ""} />
                <ImageCarousel imgData={pictures} />
            </div>
        )
    }
}

export default NASAGallery