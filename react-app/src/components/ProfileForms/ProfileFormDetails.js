import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfoThunk } from "../../store/users";

function ProfileFormDetails() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [occupation, setOccupation] = useState(
    user.occupation ? user.occupation : ""
  );
  const [hometown, setHometown] = useState(user.hometown ? user.hometown : "");
  const [city, setCity] = useState(user.city ? user.city : "");
  const [country, setCountry] = useState(user.country ? user.country : "");
  const [website, setWebsite] = useState(user.website ? user.website : "");
  const [facebook, setFacebook] = useState(user.facebook ? user.facebook : "");
  const [twitter, setTwitter] = useState(user.twitter ? user.twitter : "");
  const [instagram, setInstagram] = useState(
    user.instagram ? user.instagram : ""
  );
  const [pinterest, setPinterest] = useState(
    user.pinterest ? user.pinterest : ""
  );
  const [tumblr, setTumblr] = useState(user.tumblr ? user.tumblr : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("occupation here", occupation);
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
    console.log("userInfoProp", user.id);
    const data = await dispatch(updateUserInfoThunk(newBio, user.id, 'details'));
  };

  return (
    <div className="details-form-wrapper">
      <form onSubmit={handleSubmit} className="details-form">
        <label className="profile-form-label">
          Occupation
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Current City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Hometown
          <input
            type="text"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Website
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Facebook
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Twitter
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Instagram
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Pinterest
          <input
            type="text"
            value={pinterest}
            onChange={(e) => setPinterest(e.target.value)}
          />
        </label>
        <label className="profile-form-label">
          Tumblr
          <input
            type="text"
            value={tumblr}
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
