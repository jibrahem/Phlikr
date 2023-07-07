import React from "react"
import { useDispatch } from "react-redux"
import { useModal } from '../../context/Modal'
import { deleteCommentThunk } from "../../store/comment"
import { getSingleImageThunk, getImageCommentsThunk } from "../../store/image"


function DeleteCommentModal(comment, image){
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    console.log('commemt', comment.comment)
    console.log('image', image)

    const handleDelete = async (e) => {
        e.preventDefault()
        const deleted = await dispatch(deleteCommentThunk(comment.comment))
       console.log('deleted', deleted)
        if(!comment.comment.id)
            dispatch(getSingleImageThunk(comment.image.image.id))
            dispatch(getImageCommentsThunk(comment.image.image.id))
            closeModal()

    }

    return (
        <>
            <div className="delete">
                <h1>Delete Comment</h1>
                <h4>Are you sure you want to delete this comment?</h4>
                <form onSubmit={handleDelete}>
                    <div className="red">
                        <button type='submit'>
                            Delete
                        </button>
                    </div>
                    <div className="grey">
                        <button onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default DeleteCommentModal
