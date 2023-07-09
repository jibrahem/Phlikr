import { useDispatch, useSelector } from "react-redux";
import { getSingleImageThunk, getUserFavImgThunk, getAllFavImguserThunk, deleteUserFavImgThunk, addUserFavThunk } from '../store/image'
import './Home/UserHome.css'
import { useEffect } from "react";


export default function Favorites({ imageId }) {
    const sessionUser = useSelector((state) => state.session.user);
    const userFavImagesStore = useSelector((state) => state.images.userFavImg);
    const userFavImgArr = Object.values(userFavImagesStore);
    // console.log("userFavImagArr in Favorites component: ", userFavImgArr)

    const dispatch = useDispatch();

    const userFavorite = async (imageId) => {

        const payload = {
          user_id: sessionUser.id,
          image_id: imageId,
    
        }
        const res = [];
    
        for (let favImg of userFavImgArr) {
          // console.log("favimg in userFavorite function: ", favImg)
          res.push(favImg.id)
       }
        //  console.log("res in the for loop: ", res);
        if (res.includes(imageId)) {
         dispatch(deleteUserFavImgThunk(sessionUser.id, imageId))
         .then(dispatch(getUserFavImgThunk(sessionUser.id)))
         .then(dispatch(getAllFavImguserThunk(imageId)))
         .then(dispatch(getSingleImageThunk(imageId)))
        } else {
          dispatch(addUserFavThunk(payload))
          .then(dispatch(getUserFavImgThunk(sessionUser.id)))
          .then(dispatch(getAllFavImguserThunk(imageId)))
          .then(dispatch(getSingleImageThunk(imageId)))
        }
    };
    
    // useEffect(() => {
    //     dispatch(getUserFavImgThunk(sessionUser.id));
    //     dispatch(getAllFavImguserThunk(imageId))
    //     dispatch(getSingleImageThunk(imageId));
    // }, [dispatch, sessionUser.id, imageId])

    return (
        <>
        <button
            onClick={() => userFavorite(imageId)}
            id={(() => {
            const res = [];
            for (let favImg of userFavImgArr) {
                res.push(favImg.id)
            }
            //  console.log("res in the for loop: ", res);
            if (res.includes(imageId)) {
            return 'user-fav'
            } else {
            return 'not-user-fav'
            }
            })()}
            >
            <i className="fa-solid fa-star"></i>
        </button>
        </>
    )
};