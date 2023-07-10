import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";
import { useModal } from '../../context/Modal'
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";


function ProfilePhoto(){
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [profilePhoto, setProfilePhoto] = useState(
        user.profile_photo ? user.profile_photo : ""
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newCover = {
            profile_photo: profilePhoto,
        };
        //temp
        let formType = "profile_photo";
        console.log("userInfoProp", user.id);
        const data = await dispatch(
            updateUserInfoThunk(newCover, user.id, formType)
        );
        closeModal()
    };


    return (
        <>
            <div className="banner-update">
                <form onSubmit={handleSubmit} className="cover-form">
                    <div className="update-comment">
                        Update Profile Photo
                    </div>
                    <textarea
                        classname="form-form-input"
                        type="textarea"
                        value={profilePhoto}
                        onChange={(e) => setProfilePhoto(e.target.value)}
                        defaultValue={user.cover_photo}
                    />
                    <div className="banner-button">
                        <button type="submit" className="cover-form-submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfilePhoto
