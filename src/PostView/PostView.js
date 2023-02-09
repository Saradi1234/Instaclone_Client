import React,{ useState, useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import { getPosts } from '../api/api'
import ViewPostPopup from '../ViewPost/ViewPostPopup';


export default function PostView() {

    const [userdata, setUserdata] = useState(null);
    const [currPage, setCurrPage] = useState(1)
    const [postToView, setPostToView] = useState(null)
    const [postPopup, setPostPopup] = useState(false)



    useEffect(() => {
        function fetchData() {
            getPosts(currPage)
                .then((res) => {
                    let dataArr = res.data
                    // dataArr.reverse()
                    setUserdata(dataArr)
                })
        }

        
        fetchData();
    }, [currPage])

    return (
        <>
            <Navbar />
            <div className='postview-container'>

                {userdata === null ?
                    <h1 className='while-loading'>Loading Posts.....</h1>
                    :
                    <div className='card-container'>
                        {
                            userdata.map((data, idx) => {
                                return <Card key={idx} data={data}
                                    viewThisPost={() => {
                                        setPostToView(data)
                                        setPostPopup(true)
                                    }} />
                            })
                        }
                        {userdata.length === 0 ?
                            <h1 className='no-posts'>No posts to display</h1> : null}
                        <PaginationFooter />
                    </div>
                }
            </div>
            <ViewPostPopup post={postToView} open={postPopup} close={()=>setPostPopup(false)}/>
        </>
    )









    //----------------------footer-----------------------
    function PaginationFooter() {
        return (
            <footer className='footer'>

                <button
                    style={currPage === 1 ?
                        { backgroundColor: 'rgb(111, 111, 255)', border: 'none' } : {}}
                    onClick={() => {
                        if (currPage === 1) return
                        setCurrPage(prev => prev - 1)
                    }}
                >PREV</button>

                <span>{currPage}</span>

                <button
                    style={!userdata.length ?
                        { backgroundColor: 'rgb(111, 111, 255)', border: 'none' } : {}}
                    onClick={() => {
                        if (!userdata.length) return
                        setCurrPage(prev => prev + 1)
                    }}
                >NEXT</button>
            </footer>
        )
    }
}