import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import './CommentModal.css'
import { getImageCommentsThunk } from '../../store/image'
import { createCommentThunk } from "../../store/comment";


function CommentModal(image) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();
    const [description, setDescription] = useState('')
    const user = useSelector(state => state.session.user)
    const imageId = image.image.id

    const comments = useSelector((state) => state.images.imageComments);
    const commentArr = Object.values(comments)

    useEffect(() => {
        dispatch(getImageCommentsThunk(imageId))
    }, [dispatch, imageId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = {
            user_id: user.id,
            image_id: imageId,
            description: description,
            updated_at: new Date().toUTCString(),
            created_at: new Date().toUTCString()
        }

        console.log(comment)
        const data = await dispatch(createCommentThunk(imageId, user.id, comment))
        .then(dispatch(getImageCommentsThunk(imageId)))
        console.log('data', data)
        // if (data) {

        //     setErrors(data);
        // }
    };


    if(!commentArr){
        return null
    }

    return (
        <>
            {commentArr.length > 0 && commentArr.map(comment=> (
               
                <div>{comment.description}</div>
            ))}
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
                    />
                    <div className="comment-button">
                        <button type="submit" onSubmit={handleSubmit}>Add Comment</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CommentModal;
