import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";

function ProfileFormCover() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [coverPhoto, setCoverPhoto] = useState(
    user.cover_photo ? user.cover_photo : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newCover = {
      cover_photo: coverPhoto,
    };

    let formType = "cover_photo";
    console.log("userInfoProp", user.id);
    const data = await dispatch(
      updateUserInfoThunk(newCover, user.id, formType)
    );
  };

  return (
    <div className="cover-form-wrapper">
      <form onSubmit={handleSubmit} className="cover-form">
        <textarea
          classname="form-form-input"
          type="textarea"
          value={coverPhoto}
          onChange={(e) => setCoverPhoto(e.target.value)}
          defaultValue={user.cover_photo}
        />
        <button type="submit" className="cover-form-submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfileFormCover;
