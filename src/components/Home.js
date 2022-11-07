import React from 'react';
import Face from '../images/face.png'
import '../home.css'

export default function Home() {
    return (
        <div className='d-flex justify-content-center text-center'>
            <div id='image-cropper' className=''>
                <img src={Face} id='profile-pic' alt='profile'/>
            </div>
            <div id='text-container' className=''>
                <h1>Welcome to my Portfolio!</h1>
                <p>Use the navbar at the top to navigate through and look at what I have acomplished.</p>
            </div>
      </div>
    )
}