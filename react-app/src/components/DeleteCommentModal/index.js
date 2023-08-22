import React from "react"
import { useDispatch } from "react-redux"
import { useModal } from '../../context/Modal'
import { deleteCommentThunk } from "../../store/comment"
import { getSingleImageThunk, getImageCommentsThunk } from "../../store/image"
import'./DeleteComment.css'

function DeleteCommentModal(comment, image){
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    // console.log('comment', comment)
    const handleDelete = async (e) => {
        e.preventDefault()
        const deleted = await dispatch(deleteCommentThunk(comment.comment))
    //    console.log('deleted', deleted)
        if(!comment.comment.id)
            dispatch(getSingleImageThunk(comment.image.image.id))
            dispatch(getImageCommentsThunk(comment.image.image.id))
            closeModal()

    }

    return (
        <>
            <div className="delete">
                <div className="delete-comment">Delete Comment</div>
                <div className="delete-check">Are you sure you want to delete this comment?</div>
                <form onSubmit={handleDelete}>
                    <div className="grey">
                        <button onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                    <div className="blue">
                        <button type='submit'>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default DeleteCommentModal
