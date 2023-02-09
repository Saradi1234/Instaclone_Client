import React, { useState } from "react";
import Navbar from '../PostView/Navbar';
import { useNavigate } from 'react-router-dom';
import { createPosts } from "../api/api";
import Resizer from "react-image-file-resizer";


function FormPage() {

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                600,
                600,
                "JPEG",
                80,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });


    const navigate = useNavigate();

    const [postDisabled, setPostDisabled] = useState(true);

    const [data, setData] = useState({
        image: '',
        author: '',
        location: '',
        description: ''
    })


    const onFileChange = async (event) => {
        try {
            const file = event.target.files[0];
            const imageURI = await resizeFile(file);
            // console.log(imageURI);
            setData((prev) => {
                return {
                    ...prev,
                    image: imageURI
                }
            })
        } catch (err) {
            console.log(err);
        }
    };

    formValidation();

    function formValidation() {
        if (!data.image ||
            !data.author ||
            !data.location ||
            !data.description) {
            return
        }
        if (postDisabled) {
            setPostDisabled(false)
        }
    }


    function onChangeHandler(event) {
        setData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }


    function onFileSubmit(e) {
        e.preventDefault();

        createPosts(data).then((res) => {
            console.log("response :: ", res.data);
            navigate("/PostView");
        })
            .catch((err) => {
                console.log(err);
            })
    }




    return (
        <>
            <Navbar />
            <div className="Form-container">
                <form onSubmit={onFileSubmit}>

                    <div className="image-file">
                        <input type="file"
                            name="imagefile"
                            accept="image/*"
                            onChange={onFileChange}
                        />
                    </div>

                    <div className="author-location">
                        <input
                            type="text"
                            name="author"
                            value={data.author}
                            placeholder='Author'
                            onChange={onChangeHandler}
                        />

                        <input
                            type="text"
                            name="location"
                            value={data.location}
                            placeholder='Location'
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="description">
                        <input
                            type="text"
                            name="description"
                            value={data.description}
                            placeholder='Description'
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="Post-btn">
                        <button type="submit"
                            disabled={postDisabled}
                        >Post
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormPage;