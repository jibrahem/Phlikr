import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import'./CommentModal.css'



function CommentModal() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (data) {
        //     setErrors(data);
        // } else {
        //     closeModal()
        // }
    };

    return (
        <div className="comments-form">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                <textarea
                    // value={text}
                    // onChange={(e) => setText(e.target.value)}
                    placeholder="Add a comment about this photo"
                />
                    <div className="comment-button">
                        <button type="submit">Add Comment</button>
                    </div>
                </form>
        </div>
    );
}

export default CommentModal;
