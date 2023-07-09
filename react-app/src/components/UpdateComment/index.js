import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCommentsThunk } from '../../store/image'
import { updateCommentThunk } from "../../store/comment";



function UpdateComment(image, comment) {

    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(true);
    const [errors, setErrors] = useState([]);
    const ulRef = useRef();
    const [description, setDescription] = useState(image.comment.description)
    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            user_id: user.id,
            image_id: image.image.image.id,
            description: description,
            updated_at: new Date().toUTCString(),

        }
        let id = image.comment.id


        const data = await dispatch(updateCommentThunk(newComment, id))
        await dispatch(getImageCommentsThunk(image.image.image.id))

    }
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(true);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    const closeMenu = () => setShowMenu(false);


    const ulClassName = "comment-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>

            <div className="comments-form">
                <ul className={ulClassName} ref={ulRef}>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            minLength={1}
                            maxLength={300}
                        />
                    <div className="comment-button">
                        <button type="submit" onClick={closeMenu}>Done</button>
                    </div>
                </form>
                    </ul>
            </div >
        </>
    )
}
export default UpdateComment
