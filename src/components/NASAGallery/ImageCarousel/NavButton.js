import React from 'react'

import './NavButton.css'


function NavButton(props) {
    return (
        <button className="carousel-navbutton asd" type="button">{ props.label }</button>
    )
}

export default NavButton