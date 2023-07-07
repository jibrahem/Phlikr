import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";

function ProfileFormBio() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [biography, setBiography] = useState(
    user.biography ? user.biography : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newBio = {
      biography: biography,
    };
    console.log("userInfoProp", user.id);
    const data = await dispatch(updateUserInfoThunk(newBio, user.id));
  };

  return (
    <div className="bio-form-wrapper">
      <form onSubmit={handleSubmit} className="bio-form">
        <textarea
          classname="form-form-input"
          type="textarea"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          defaultValue={user.biography}
        />
        <button type="submit" className="profile-form-submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfileFormBio;
