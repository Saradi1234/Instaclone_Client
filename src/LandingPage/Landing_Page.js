import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return <>
        <div className="landing-page">
            <div className="left-section">
                <img src={require('../Images/lens.jpg')} alt='lens' />
            </div>
            <div className="right-section">
                <h1>INSTACLONE</h1>
                <div className='btn'>
                    <button>
                        <Link to='/PostView'
                        style={{
                            textDecoration:'none',
                            color: '#006238'
                        }}
                        >Enter</Link>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default LandingPage;