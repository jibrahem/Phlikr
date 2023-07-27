import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { userInfoThunk } from "../../store/users";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Photostream from "./Photostream";
import ProfileBanner from "./ProfileBanner";
import About from "./About";
import Faves from "./Faves";

export default function UserPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const { userId, page } = useParams();
  const userImages = useSelector((state) => state.images.userImages);
  const userInfo = useSelector((state) => state.users.userInfo);
  const userImagesArr = Object.values(userImages);
  const dispatch = useDispatch();
  // console.log("page", page);
  // console.log("userId", userId);
  //   console.log("userImage arr", userImagesArr);
  const currDate = Date();

  //   const photoCount = userImagesArr[0].length;
  useEffect(() => {
    // console.log("userId before dispatch in userpage", userId);
    dispatch(getUserImagesThunk(parseInt(userId)));
    dispatch(userInfoThunk(parseInt(userId)));
  }, []);

  // console.log("userinfo", userInfo);
  if (userImagesArr.length < 1) {
    // console.log("info not loaded yet");
    return null;
  } else {
    // console.log("info loaded ", userImagesArr);
    // console.log("userinfo", userInfo);
  }

  if (!userInfo) return null;
  // console.log("userImagesArr", userImagesArr);

  return (
    <>
      {userImagesArr.length > 0 ? (
        <>
          <ProfileBanner userInfo={userInfo} />
          {page === "photos" ? (
            <Photostream userImagesArr={userImagesArr} />
          ) : (
            ""
          )}
          {page === "people" ? (
            <About userImagesProp={userImagesArr} userInfoProp={userInfo} />
          ) : (
            ""
          )}
          {page === "favorites" ? <Faves userImagesArr={userImagesArr} /> : ""}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
