import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCommentsThunk, getSingleImageThunk } from '../../store/image'
import { createCommentThunk } from "../../store/comment";
import DeleteCommentModal from "../DeleteCommentModal";
import OpenModalMenuItem from '../OpenModalButton'
import UpdateComment from "../UpdateComment";
import './Comments.css'



function Comments(image) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState('')
    const user = useSelector(state => state.session.user)
    const imageId = image.image.id

    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const comments = useSelector((state) => state.images.imageComments);
    const commentArr = Object.values(comments)

    useEffect(() => {
        dispatch(getImageCommentsThunk(imageId))
        dispatch(getSingleImageThunk(imageId))
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

        const data = await dispatch(createCommentThunk(imageId, user.id, comment))
        await dispatch(getImageCommentsThunk(imageId))
        setDescription('')
    };

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = (e) => {
    //         if (!ulRef.current.contains(e.target)) {
    //             setShowMenu(false);
    //         }
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    if (!commentArr) {
        return null
    }

    // console.log('THE COMMMENTS', commentArr)

    // const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <div className="comments">
            {commentArr.length > 0 && commentArr.map(comment => (
                <div key={comment.id} className="comment">
                    <p>{comment.description}</p>
                    <div>
                        {comment.user_id === user.id &&
                            <div>
                                <div>
                                    <div className="icon">
                                        <button onClick={
                                            <UpdateComment
                                                comment={comment}
                                                image={image}
                                            />}
                                            >
                                            <i class="fa-regular fa-pen-to-square"></i>
                                            </button>
                                        <div className="delete-modal">
                                            <OpenModalMenuItem
                                                buttonText="🗑️"
                                                onItemClick={closeMenu}
                                                modalComponent={<DeleteCommentModal
                                                    comment={comment}
                                                    image={image}
                                                />}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>
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
                        required
                    />
                    <div className="comment-button">
                        <button type="submit" onSubmit={handleSubmit}>Add Comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Comments;
