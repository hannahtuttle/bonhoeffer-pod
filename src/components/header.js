import React from 'react'
import '../styles/header.scss'


const Header = () => {

    return(
        <div>
            <div className='triangle-topleft'></div>
            <header  > 
                <h1>The Bonhoeffer Podcast</h1>
                <h4>A podcast about the life, theology, and practice of Dietrich Bonhoeffer.</h4>
            </header>
            <div className='triangle-bottomright'></div>
        </div>
    )
}

export default Header;


