import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ProfileBanner({ userInfo, photoCount }) {
  const sessionUser = useSelector((state) => state.session.user);
  const { userId } = useParams();

  const dispatch = useDispatch();

  return (
    <>
      <h1>Profile banner info</h1>
      <img src={userInfo.cover_photo} />
      <img src={userInfo.profile_photo} />
      <p>
        {userInfo.first_name} {userInfo.last_name}
      </p>
      <p>{photoCount}</p>

      <div className="profile-navigation">
        <NavLink to={`/${userInfo.id}/people`}>About</NavLink>
        <NavLink to={`/${userInfo.id}/photos`}>Photostream</NavLink>
        <NavLink to={`/${userInfo.id}/favorites`}>Faves</NavLink>
      </div>
    </>
  );
}
