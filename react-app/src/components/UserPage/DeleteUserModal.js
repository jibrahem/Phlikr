import { useSelector, useDispatch } from "react-redux";
import "./About.css";
import { logout } from "../../store/session";
import { userDeleteThunk } from "../../store/users";
import { useHistory } from "react-router-dom";
import { useModal } from '../../context/Modal'


function DeleteUserModal() {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    const deleteUserClick = (e) => {
        // console.log("usere delete clicked", sessionUser.id);
        dispatch(userDeleteThunk(sessionUser.id));
        dispatch(logout());
        history.push("/");
    };
    return (
        <>
            <div className="delete">
                <div className="delete-comment">Delete User</div>
                <div className="delete-check">Are you sure you want to delete this user? You will not be able to undo this action.</div>
                <form onSubmit={deleteUserClick}>
                    <div className="grey">
                        <button onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                    <div className="red">
                        <button type='submit'>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DeleteUserModal
