import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function AboutPage({ userImagesProp, userInfo }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showBioForm, setShowBioForm] = useState(false);
  const [showShowcaseTitleForm, setShowShowcaseTitleForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const currDate = Date();

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

  return (
    <>
      <>About</>
      <div className="biography">
        {!showBioForm ? <>Write a little about yourself</> : <></>}
        <button onClick={bioClick}>Bio</button>
        {showBioForm ? <p>bio form</p> : <></>}
      </div>
      <div className="showcase">
        {!showShowcaseTitleForm ? <>Write a little about yourself</> : <></>}
        <button onClick={showcaseTitleClick}>Showcase title</button>
        {showShowcaseTitleForm ? <p>showcase title form</p> : <></>}
      </div>
      <div className="details">
        {!showDetailForm ? <>{userInfo.email}</> : <></>}
        <button onClick={detailClick}>Detail button</button>
        {showDetailForm ? <p>showcase title form</p> : <></>}
        {console.log("userinfo", userInfo.occupation)}
        {userInfo.occupation}
      </div>
    </>
  );
}
