import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./UserPage.css";

export default function ProfileBanner({ userInfo, photoCount }) {
  const sessionUser = useSelector((state) => state.session.user);
  const { userId } = useParams();

  const dispatch = useDispatch();
  
  return (
    <>
      <div id='profile-banner-div>'>
        <div className="profile-banner-top">
          <div id='cover-photo'>
            <img src={userInfo.cover_photo} />
          </div>
          <div id='profile-photo'>
            <img src={userInfo.profile_photo} />
            <div>
              <p style={{fontSize: "24px"}} className="profile-photo-name">{userInfo.first_name} {userInfo.last_name}</p>
            </div>
          </div> 
        </div>
      </div>
      <div className="profile-navigation">
        <NavLink style={{ color: "black", fontSize: "18px"}} to={`/${userInfo.id}/people`}>About</NavLink>
        <NavLink style={{ color: "black", fontSize: "18px" }} to={`/${userInfo.id}/photos`}>Photostream</NavLink>
        <NavLink style={{ color: "black", fontSize: "18px" }} to={`/${userInfo.id}/favorites`}>Faves</NavLink>
      </div>
    </>
  );
}
