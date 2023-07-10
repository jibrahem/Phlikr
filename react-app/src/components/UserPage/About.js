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
    history.push("/photos/1");
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
          <button onClick={bioClick}>Edit Bio</button>
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
          {showBioForm ? <ProfileFormBio userInfo={userInfoProp} /> : <></>}
        </div>
        <div className="about-showcase">
          <div className="showcase-header">
            <p>{userInfo.first_name}'s Showcase</p>
            <OpenModalButton
              buttonText="Update Showcase"
              modalComponent={<ShowcaseModal userImageArr={userImageArr} />}
            />
          </div>

          {userShowcaseArr ? (
            <div className="showcase-gallery-wrapper">
              {userShowcaseArr.map((image) => {
                return (
                  <div className="showcase-item-wrapper">
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
          <button onClick={detailClick}>Edit user details</button>
          {showDetailForm ? (
            <ProfileFormDetails />
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
        <button onClick={deleteUserClick}>DELETE user</button>
      </div>
    </div>
  );
}
