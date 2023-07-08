import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { userInfoThunk } from "../../store/users";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfileFormBio from "../ProfileForms/ProfileFormBio";
import ProfileFormDetails from "../ProfileForms/ProfileFormDetails";

export default function AboutPage({ userImagesProp, userInfoProp }) {
  const sessionUser = useSelector((state) => state.session.user);
  const userInfo = useSelector((state) => state.users.userInfo);
  const [showBioForm, setShowBioForm] = useState(false);
  const [showShowcaseTitleForm, setShowShowcaseTitleForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const currDate = Date();
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(userInfoThunk(userInfo.id));
    },
    showBioForm,
    showDetailForm
  );

  if (userImagesProp.length < 1) return null;

  const bioClick = (e) => {
    console.log("bioform", showBioForm);
    setShowBioForm(!showBioForm);
  };

  const showcaseTitleClick = (e) => {
    setShowShowcaseTitleForm(!showShowcaseTitleForm);
  };

  const detailClick = (e) => {
    setShowDetailForm(!showDetailForm);
  };

  console.log("userInfo in about page", userInfoProp);
  return (
    <>
      <>About</>
      <div className="biography">
        {!showBioForm ? (
          <>
            {userInfo.biography ? (
              userInfo.biography
            ) : (
              <>Write a little about yourself</>
            )}
          </>
        ) : (
          <></>
        )}
        <button onClick={bioClick}>Bio</button>
        {showBioForm ? <ProfileFormBio userInfo={userInfoProp} /> : <></>}
      </div>
      <div className="showcase">
        display showcase photos here
        {/* {!showShowcaseTitleForm ? <>Write a little about yourself</> : <></>}
        <button onClick={showcaseTitleClick}>Showcase title</button>
        {showShowcaseTitleForm ? <p>showcase title form</p> : <></>} */}
      </div>
      <div className="details">
        {!showDetailForm ? <ProfileFormDetails /> : <></>}
        <button onClick={detailClick}>Detail button</button>
        {showDetailForm ? <p>showcase title form</p> : <></>}
        <div className="profile-details">
          <div>{userInfo.occupation}</div>
          <div>{userInfo.hometown}</div>
          <div>{userInfo.city}</div>
          <div>{userInfo.country}</div>
          <div>{userInfo.website}</div>
          <div>{userInfo.facebook}</div>
          <div>{userInfo.twitter}</div>
          <div>{userInfo.instagram}</div>
          <div>{userInfo.pinterest}</div>
          <div>{userInfo.tumblr}</div>
        </div>
      </div>
    </>
  );
}
