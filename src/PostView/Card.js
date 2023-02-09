import React from 'react';

const Card = ({ data ,viewThisPost}) => {
    return (
        <>
            <div className="card">
                <div className="top-section">
                    <div className="name-location">
                        <p>
                            <span className='name'> {data.name}</span>
                            <br />
                            <span className='location'> {data.location}</span>
                        </p>
                    </div>
                    <div className="dot">
                        <img src={require('../Images/more.png')} alt="dot-more" />
                    </div>
                </div>

                <div className='image-section'>
                    <img src={data.PostImage} alt="" onClick={viewThisPost} />
                </div>

                <div className='botttom-section'>
                    <div className='upper-desc'>

                        <div className='heart-send-likes'>
                            <img src={require('../Images/heart.png')} alt="heart" />
                            <span><img src={require('../Images/send.png')} alt="send" /></span>
                            <div className='likes'>
                                {data.likes} likes
                            </div>
                        </div>

                        <div className='date'>
                            {data.date}
                        </div>
                    </div>

                    <div className='description'>
                        {data.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;