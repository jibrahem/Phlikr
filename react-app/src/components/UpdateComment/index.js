import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCommentsThunk, getSingleImageThunk } from '../../store/image'
import { updateCommentThunk } from "../../store/comment";
import DeleteCommentModal from "../DeleteCommentModal";
import OpenModalMenuItem from '../OpenModalButton'


function UpdateComment(image, comment) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState(comment?.description)
    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = {
            user_id: user.id,
            image_id: image.image.id,
            description: description,
            updated_at: new Date().toUTCString(),
            created_at: new Date().toUTCString()
        }

        const data = await dispatch(updateCommentThunk(comment))
        await dispatch(getImageCommentsThunk(image.image.id))

    }
    return (
        <>
            <div className="comments-form">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a comment about this photo"
                        required
                    />
                    <div className="comment-button">
                        <button type="submit" onSubmit={handleSubmit}>Done</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default UpdateComment
