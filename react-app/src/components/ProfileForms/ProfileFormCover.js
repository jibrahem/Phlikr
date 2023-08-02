import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserCoverPhotoThunk, updateUserInfoThunk, userInfoThunk } from "../../store/users";
import { useModal } from "../../context/Modal";
import "./ProfileForms.css";
import { getUserImagesThunk } from "../../store/image";

function ProfileFormCover() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [coverPhoto, setCoverPhoto] = useState(
    user.cover_photo ? user.cover_photo : ""
  );
  const [errors, setErrors] = useState([]);
  const newErrors = [];

    // if (
    //   !(
    //     coverPhoto.includes("jpeg") ||
    //     coverPhoto.includes("jpg") ||
    //     coverPhoto.includes("png") ||
    //     coverPhoto.includes("webp") ||
    //     coverPhoto.includes("tiff") ||
    //     coverPhoto.includes("raw")
    //   )
    // )
    //   newErrors.push("Cover photo url must be jpg, jpeg, or png");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("cover_photo", coverPhoto)

    await dispatch(editUserCoverPhotoThunk(formData, user.id));
    await dispatch(userInfoThunk(user.id));
    await dispatch(getUserImagesThunk(user.id));

    closeModal();

  };

  return (
    <div className="banner-update">
      <form 
        onSubmit={handleSubmit} 
        className="cover-form"
        encType="multipart/form-data"
      >
        <div className="update-comment">Update Profile Banner</div>
        {errors.map((error) => (
          <div className="err-msg">{error}</div>
        ))}
        <input
          classname="form-form-input"
          type="file"
          // value={coverPhoto}
          onChange={(e) => setCoverPhoto(e.target.files[0])}
          // defaultValue={user.cover_photo}
        />
        <div className="banner-button">
          <button type="submit" className="cover-form-submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileFormCover;
