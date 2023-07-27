import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";
import { editUserProfilePhotoThunk} from "../../store/users";
import { useModal } from "../../context/Modal";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";

function ProfilePhoto() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [errors, setErrors] = useState([]);

  const [profilePhoto, setProfilePhoto] = useState(
    user.profile_photo ? user.profile_photo : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append('profile_photo', profilePhoto);
    console.log("formData in profile photo component: ", formData);



    await dispatch(editUserProfilePhotoThunk(formData, user.id));
    
    closeModal();
    // console.log("userInfoProp", user.id);
    // if (newErrors.length == 0) {
    //   const data = await dispatch(updateUserInfoThunk(formData, user.id, formType));
      // closeModal();
    // } else {
      // setErrors(newErrors);
    // }
  };

  return (
    <>
      <div className="banner-update">
        <form 
          onSubmit={handleSubmit} 
          className="cover-form"
          encType="multipart/form-data"
        >
          <div className="update-comment">Update Profile Photo</div>
          {errors.map((error) => (
            <div className="err-msg">{error}</div>
          ))}
          <input
            classname="form-form-input"
            type="file"
            // value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            // defaultValue={user.cover_photo}
          />
          <div className="banner-button">
            <button type="submit" className="cover-form-submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfilePhoto;
