import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <div className='icon-name'>
                        <img src={require('../Images/icon.jpg')} alt="instaclone icon" />
                        <span>Instaclone</span>
                    </div>
                </div>

                <div className='camera'>
                    <Link to='/FormPage'>
                        <img src={require('../Images/camera.jpg')} alt="camera icon" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;