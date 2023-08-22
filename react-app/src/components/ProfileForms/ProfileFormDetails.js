import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";

function ProfileFormDetails() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [occupation, setOccupation] = useState(
    sessionUser.occupation ? sessionUser.occupation : ""
  );
  const [hometown, setHometown] = useState(sessionUser.hometown ? sessionUser.hometown : "");
  const [city, setCity] = useState(sessionUser.city ? sessionUser.city : "");
  const [country, setCountry] = useState(sessionUser.country ? sessionUser.country : "");
  const [website, setWebsite] = useState(sessionUser.website ? sessionUser.website : "");
  const [facebook, setFacebook] = useState(sessionUser.facebook ? sessionUser.facebook : "");
  const [twitter, setTwitter] = useState(sessionUser.twitter ? sessionUser.twitter : "");
  const [instagram, setInstagram] = useState(
    sessionUser.instagram ? sessionUser.instagram : ""
  );
  const [pinterest, setPinterest] = useState(
    sessionUser.pinterest ? sessionUser.pinterest : ""
  );
  const [tumblr, setTumblr] = useState(sessionUser.tumblr ? sessionUser.tumblr : "");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("occupation here", occupation);
    let newBio = {
      occupation: occupation,
      hometown: hometown,
      city: city,
      country: country,
      website: website,
      facebook: facebook,
      twitter: twitter,
      instagram: instagram,
      instagram: instagram,
      pinterest: pinterest,
      tumblr: tumblr,
    };
    // console.log("sessionUserInfoProp", sessionUser.id);
    const data = await dispatch(
      updateUserInfoThunk(newBio, sessionUser.id, "details")
    );
    if (data) {
      setErrors(data);
      // console.log("errors set");
    }
  };

  return (
    <div className="details-form-wrapper">
      {errors}
      <form onSubmit={handleSubmit} className="details-form">
        <label className="profile-form-label">
          Occupation
          <input
            type="text"
            value={occupation}
            // maxLength={45}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Current City
          <input
            type="text"
            value={city}
            // maxlength={"5"}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Hometown
          <input
            type="text"
            value={hometown}
            // maxLength={45}
            onChange={(e) => setHometown(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Country
          <input
            type="text"
            value={country}
            // maxLength={45}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Website
          <input
            type="text"
            value={website}
            // maxLength={90}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Facebook
          <input
            type="text"
            value={facebook}
            // maxLength={60}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Twitter
          <input
            type="text"
            value={twitter}
            // maxLength={45}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Instagram
          <input
            type="text"
            value={instagram}
            // maxLength={45}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Pinterest
          <input
            type="text"
            value={pinterest}
            // maxLength={45}
            onChange={(e) => setPinterest(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Tumblr
          <input
            type="text"
            value={tumblr}
            // maxLength={45}
            onChange={(e) => setTumblr(e.target.value)}
          />
        </label>
        <div className="profile-submit">
          <button type="submit" className="profile-form-submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileFormDetails;
