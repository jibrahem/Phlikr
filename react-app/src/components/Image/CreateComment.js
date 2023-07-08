
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCommentsThunk, getSingleImageThunk } from '../../store/image'
import { createCommentThunk } from "../../store/comment";
import DeleteCommentModal from "../DeleteCommentModal";
import OpenModalMenuItem from '../OpenModalButton'
import UpdateComment from "../UpdateComment";
import './Comments.css'


function CreateComment(image) {

    console.log('image', image)

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState('')
    const user = useSelector(state => state.session.user)
    const imageId = image.image.image.id



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            user_id: user.id,
            image_id: imageId,
            description: description,
            updated_at: new Date().toUTCString(),
            created_at: new Date().toUTCString()
        }

        const data = await dispatch(createCommentThunk(imageId, user.id, newComment))
        await dispatch(getImageCommentsThunk(imageId))
        setDescription('')
    };



    return (
        <div className="comments-form">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className='form-image'>
                    <img src={user.profile_photo} alt={user.username}></img>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder=" Add a comment"
                        required
                    />
                </div>
                <div className="comment-button">
                    <button type="submit">Comment</button>
                </div>
            </form>
        </div>
    );

}

export default CreateComment
