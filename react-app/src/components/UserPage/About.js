import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { logout } from "../../store/session";
import {
  userInfoThunk,
  getUserShowcaseThunk,
  userDeleteThunk,
} from "../../store/users";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import ProfileFormBio from "../ProfileForms/ProfileFormBio";
import ProfileFormDetails from "../ProfileForms/ProfileFormDetails";
import ShowcaseModal from "../ShowcaseModal";
import OpenModalButton from "../OpenModalButton";
import "./About.css";
import DeleteUserModal from "./DeleteUserModal";
import { updateUserInfoThunk } from "../../store/users";

export default function AboutPage({ userImagesProp, userInfoProp }) {
  const sessionUser = useSelector((state) => state.session.user);
  const userInfo = useSelector((state) => state.users.userInfo);
  const userImages = useSelector((state) => state.images.userImages);
  const userShowcase = useSelector((state) => state.users.userShowcase);
  const [showBioForm, setShowBioForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const { userId } = useParams();
  const currDate = Date();
  const dispatch = useDispatch();
  const history = useHistory();

  const [biography, setBiography] = useState(
    sessionUser.biography ? sessionUser.biography : ""
  );

  const [occupation, setOccupation] = useState(
    sessionUser.occupation ? sessionUser.occupation : ""
  );
  const [hometown, setHometown] = useState(
    sessionUser.hometown ? sessionUser.hometown : ""
  );
  const [city, setCity] = useState(sessionUser.city ? sessionUser.city : "");
  const [country, setCountry] = useState(
    sessionUser.country ? sessionUser.country : ""
  );
  const [website, setWebsite] = useState(
    sessionUser.website ? sessionUser.website : ""
  );
  const [facebook, setFacebook] = useState(
    sessionUser.facebook ? sessionUser.facebook : ""
  );
  const [twitter, setTwitter] = useState(
    sessionUser.twitter ? sessionUser.twitter : ""
  );
  const [instagram, setInstagram] = useState(
    sessionUser.instagram ? sessionUser.instagram : ""
  );
  const [pinterest, setPinterest] = useState(
    sessionUser.pinterest ? sessionUser.pinterest : ""
  );
  const [tumblr, setTumblr] = useState(
    sessionUser.tumblr ? sessionUser.tumblr : ""
  );

  const submitDetails = async (e) => {
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
    console.log("sessionUserInfoProp", sessionUser.id);
    const data = await dispatch(
      updateUserInfoThunk(newBio, sessionUser.id, "details")
    );
    if (data) {
      setErrors(data);
      console.log("errors set");
    } else {
      setShowDetailForm(false);
    }
  };
  const [errors, setErrors] = useState([]);
  const submitBio = async (e) => {
    e.preventDefault();
    let newBio = {
      biography: biography,
    };
    let formType = "bio";
    console.log("userInfoProp", sessionUser.id);
    const data = await dispatch(
      updateUserInfoThunk(newBio, sessionUser.id, formType)
    );
    if (data) {
      setErrors(data);
      console.log("errors set");
    } else {
      setShowBioForm(false);
    }
  };

  let userShowcaseArr = userShowcase["showcase_images"];

  let userImageArr = Object.values(userImages)[0];
  useEffect(
    () => {
      dispatch(userInfoThunk(userId));
      dispatch(getUserShowcaseThunk(userId));
    },
    showBioForm,
    showDetailForm,
    userShowcase
  );

  if (userImagesProp.length < 1) return null;
  if (userInfoProp.length < 1) return null;

  const bioClick = (e) => {
    console.log("bioform", showBioForm);
    setShowBioForm(!showBioForm);
  };

  const detailClick = (e) => {
    setShowDetailForm(!showDetailForm);
  };

  const deleteUserClick = (e) => {
    console.log("usere delete clicked", sessionUser.id);
    dispatch(userDeleteThunk(sessionUser.id));
    dispatch(logout());
    history.push("/");
  };

  const imageClick = (imgId) => {
    history.push(`/photos/${imgId}`);
  };

  let userInfoArr = Object.values(userInfo);
  console.log("userInfoArr in about", userInfoArr);
  if (userInfoArr.length < 1) return null;
  console.log("userInfo in about page", userInfoProp);
  console.log("User showcase arr info ", userShowcaseArr);

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-biography">
          <div className="pencil-button">
            {sessionUser.id === userInfo.id && (
              <button onClick={bioClick}>
                <i class="fa-solid fa-pen"></i>
              </button>
            )}
          </div>
          {!showBioForm ? (
            <div className="">
              {userInfo.biography ? (
                userInfo.biography
              ) : (
                <>Write a little about yourself</>
              )}
            </div>
          ) : (
            <></>
          )}
          {showBioForm ? (
            <div className="bio-form-wrapper">
              {errors}
              <form onSubmit={submitBio} className="bio-form">
                <textarea
                  classname="form-form-input"
                  type="textarea"
                  value={biography}
                  maxLength={500}
                  onChange={(e) => setBiography(e.target.value)}
                  defaultValue={sessionUser.biography}
                />
                <button type="submit" className="profile-form-submit">
                  Save
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="about-showcase">
          <div className="showcase-header">
            <p>{userInfo.first_name}'s Showcase</p>
            {sessionUser.id === userInfo.id && (
              <OpenModalButton
                buttonText="+"
                modalComponent={<ShowcaseModal userImageArr={userImageArr} />}
              />
            )}
          </div>
          {userShowcaseArr ? (
            <div className="showcase-gallery-wrapper">
              {userShowcaseArr.map((image) => {
                return (
                  <div
                    className="showcase-item-wrapper"
                    onClick={() => {
                      imageClick(image.id);
                    }}
                  >
                    <img
                      src={image.img}
                      onClick={() => {
                        imageClick(image.id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {/* {!showShowcaseTitleForm ? <>Write a little about yourself</> : <></>}
        <button onClick={showcaseTitleClick}>Showcase title</button>
        {showShowcaseTitleForm ? <p>showcase title form</p> : <></>} */}
        </div>
        <div className="about-details">
          <div className="open-details">
            {sessionUser.id === userInfo.id && (
              <button onClick={detailClick}>
                <i class="fa-solid fa-pen"></i>
              </button>
            )}
          </div>
          {showDetailForm ? (
            <div className="details-form-wrapper">
              {errors}
              <form onSubmit={submitDetails} className="details-form">
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
          ) : (
            <div className="profile-details">
              {userInfo.occupation ? (
                <div className="detail-item">
                  <div className="detail-label">Occupation: </div>
                  <div className="detail-info">{userInfo.occupation}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.hometown ? (
                <div className="detail-item">
                  <div className="detail-label">Hometown: </div>
                  <div className="detail-info">{userInfo.hometown}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.city ? (
                <div className="detail-item">
                  <div className="detail-label">City: </div>
                  <div className="detail-info">{userInfo.city}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.country ? (
                <div className="detail-item">
                  <div className="detail-label">Country: </div>
                  <div className="detail-info">{userInfo.country}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.website ? (
                <div className="detail-item">
                  <div className="detail-label">Website: </div>
                  <div className="detail-info">{userInfo.website}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.facebook ? (
                <div className="detail-item">
                  <div className="detail-label">Facebook: </div>
                  <div className="detail-info">{userInfo.facebook}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.twitter ? (
                <div className="detail-item">
                  <div className="detail-label">City: </div>
                  <div className="detail-info">{userInfo.twitter}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.instagram ? (
                <div className="detail-item">
                  <div className="detail-label">Instagram: </div>
                  <div className="detail-info">{userInfo.instagram}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.pinterest ? (
                <div className="detail-item">
                  <div className="detail-label">Pinterest: </div>
                  <div className="detail-info">{userInfo.pinterest}</div>
                </div>
              ) : (
                ""
              )}
              {userInfo.tumblr ? (
                <div className="detail-item">
                  <div className="detail-label">Tumblr: </div>
                  <div className="detail-info">{userInfo.tumblr}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>

        {sessionUser.id === userInfo.id && (
          <div className="delete-user">
            <OpenModalButton
              buttonText="DELETE USER"
              modalComponent={<DeleteUserModal />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
