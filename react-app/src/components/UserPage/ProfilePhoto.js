import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";
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
    let newErrors = [];
    let newCover = {
      profile_photo: profilePhoto,
    };
    console.log("profile photo", profilePhoto);
    if (profilePhoto.length > 255)
      newErrors.push("Cover photo url must be under 256 characters");
    if (
      !(
        profilePhoto.includes("jpeg") ||
        profilePhoto.includes("jpg") ||
        profilePhoto.includes("png") ||
        profilePhoto.includes("webp") ||
        profilePhoto.includes("tiff") ||
        profilePhoto.includes("raw")
      )
    )
      newErrors.push("Photo url must be jpg, jpeg, or png");
    //temp
    let formType = "profile_photo";

    // console.log("userInfoProp", user.id);
    if (newErrors.length == 0) {
      const data = await dispatch(
        updateUserInfoThunk(newCover, user.id, formType)
      );
      closeModal();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="banner-update">
        <form onSubmit={handleSubmit} className="cover-form">
          <div className="update-comment">Update Profile Photo</div>
          {errors.map((error) => (
            <div className="err-msg">{error}</div>
          ))}
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
  );
}

export default ProfilePhoto;
