import { useDispatch, useSelector } from 'react-redux';
import { addUserFavThunk } from "../../store/users";


export default function AddUserFav( { image }) {

    // const sessionUser = useState((state) => state.session.user);
    const sessionUser = useSelector((state) => state.session.user);
    // console.log("session user in userFav: ", sessionUser)
    const dispatch = useDispatch();

    const addUserFavFunction = () => {
        const payload = {
            user_id : sessionUser.id,
            image_id : image.id,
        }

        dispatch(addUserFavThunk(payload));
    };

    if (!sessionUser) return null;

    return (

        <button
        onClick={addUserFavFunction()}>
            <i className="fa-regular fa-star"
            ></i>
        </button>
    )
}
