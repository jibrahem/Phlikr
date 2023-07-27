import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import "./UserPage.css";
import "./ProfileBanner.css";
import ProfileFormBio from "../ProfileForms/ProfileFormBio";
import ProfileFormCover from "../ProfileForms/ProfileFormCover";
import OpenModalMenuItem from "../OpenModalButton";
import ProfilePhoto from "./ProfilePhoto";
import ProfileFormCoverModal from "../ProfileForms/ProfileFormCoverModal";


export default function ProfileBanner({ userInfo, photoCount }) {
  const sessionUser = useSelector((state) => state.session.user);
  const userProfilePhoto = useSelector((state) => state.session.userProfilePhoto)
  const { userId } = useParams();
  const userImages = useSelector((state) => state.images.userImages);
  let userImageArr = Object.values(userImages)[0];

  const [showCoverForm, setShowCoverForm] = useState(false);
  const dispatch = useDispatch();

  const coverPhotoButtonClick = (e) => {
    setShowCoverForm(!showCoverForm);
  };

  return (
    <div className="profile-banner-container">
      <div id="profile-banner>">
        <div className="profile-banner-top">
          <div id="cover-photo">
            <img src={userInfo.cover_photo} />
          </div>

          <div className="profile-photo-wrapper">
            {userInfo.id === sessionUser.id && (
              <OpenModalMenuItem
                itemText={<img src={userInfo.profile_photo} />}
                modalComponent={<ProfilePhoto />}
              />
            )}
            {userInfo.id !== sessionUser.id && (
              <img src={userInfo.profile_photo} />
            )}
            <div>
              <div className="profile-name">
                {userInfo.first_name} {userInfo.last_name}
              </div>
            </div>
            {userInfo.id === sessionUser.id && (
              <OpenModalMenuItem
                buttonText="..."
                // onItemClick={closeMenu}
                modalComponent={
                  // <ProfileFormCoverModal userImageArr={userImageArr} />
                  <ProfileFormCover />
                }
              />
            )}
          </div>
        </div>
      </div>
      <div id="profile-navigation">
        <div className="profile-nav-item">
          <NavLink
            style={{ color: "#404040", fontSize: "18px" }}
            to={`/${userInfo.id}/people`}
          >
            About
          </NavLink>
        </div>
        <div className="profile-nav-item">
          <NavLink
            style={{ color: "#404040", fontSize: "18px" }}
            to={`/${userInfo.id}/photos`}
          >
            Photostream
          </NavLink>
        </div>
        <div className="profile-nav-item">
          <NavLink
            style={{ color: "#404040", fontSize: "18px" }}
            to={`/${userInfo.id}/favorites`}
          >
            Faves
          </NavLink>
        </div>
      </div>
    </div>
  );
}
