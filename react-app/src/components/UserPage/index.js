import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Photostream from "./Photostream";
import ProfileBanner from "./ProfileBanner";
import About from "./About";
import Faves from "./Faves";

export default function UserPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const { userId, page } = useParams();
  const userImages = useSelector((state) => state.images.userImages);
  const userImagesArr = Object.values(userImages);
  const dispatch = useDispatch();
  console.log("page", page);
  console.log("userId", userId);
  //   console.log("userImage arr", userImagesArr);
  const currDate = Date();

  //   const photoCount = userImagesArr[0].length;
  useEffect(() => {
    dispatch(getUserImagesThunk(parseInt(userId)));
  }, []);

  if (userImagesArr.length < 1) return null;

  const userInfo = userImagesArr[0][0].User;

  return (
    <>
      <ProfileBanner userInfo={userInfo} />
      {page === "photos" ? <Photostream userImagesArr={userImagesArr} /> : ""}
      {page === "people" ? (
        <About userImagesProp={userImagesArr} userInfo={userInfo} />
      ) : (
        ""
      )}
      {page === "favorites" ? <Faves userImagesArr={userImagesArr} /> : ""}
    </>
  );
}
