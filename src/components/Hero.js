import React from 'react'
import photos from '../images/photo-grid.png'

const Hero = () => {
    return (
        <>
            <div className='container'>
                <img className='photos' alt='photos' src={photos} />
            </div>
            <div className='content'>
                <h1 className='title'>Online Experiences</h1>
                <p className='text'>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </>
    )
}

export default Hero