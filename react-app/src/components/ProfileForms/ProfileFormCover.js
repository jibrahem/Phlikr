import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";
import { useModal } from "../../context/Modal";
import "./ProfileForms.css";

function ProfileFormCover() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [coverPhoto, setCoverPhoto] = useState(
    user.cover_photo ? user.cover_photo : ""
  );
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = [];
    let newCover = {
      cover_photo: coverPhoto,
    };
    //temp
    let formType = "cover_photo";
    console.log("userInfoProp", user.id);

    if (coverPhoto.length > 255)
      newErrors.push("Cover photo url must be under 256 characters");
    if (
      !(
        coverPhoto.includes("jpeg") ||
        coverPhoto.includes("jpg") ||
        coverPhoto.includes("png") ||
        coverPhoto.includes("webp") ||
        coverPhoto.includes("tiff") ||
        coverPhoto.includes("raw")
      )
    )
      newErrors.push("Cover photo url must be jpg, jpeg, or png");
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
    <div className="banner-update">
      <form onSubmit={handleSubmit} className="cover-form">
        <div className="update-comment">Update Profile Banner</div>
        {errors.map((error) => (
          <div className="err-msg">{error}</div>
        ))}
        <textarea
          classname="form-form-input"
          type="textarea"
          value={coverPhoto}
          onChange={(e) => setCoverPhoto(e.target.value)}
          defaultValue={user.cover_photo}
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
