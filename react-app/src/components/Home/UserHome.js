import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllImageThunk } from "../../store/image";
import { Link, useHistory } from "react-router-dom";
import "./UserHome.css";
import CommentModal from "../CommentModal";
import OpenModalButton from "../OpenModalButton";
import {
  getUserFavImgThunk,
  deleteUserFavImgThunk,
  addUserFavThunk,
} from "../../store/image";
import Favorites from "../Favorites";

export default function UserHome() {
  const sessionUser = useSelector((state) => state.session.user);
  const imagesStore = useSelector((state) => state.images.allImages);
  const imagesArr = Object.values(imagesStore);
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const currDate = new Date();
  const [info, setInfo] = useState(false);
  const userFavImagesStore = useSelector((state) => state.images.userFavImg);
  // console.log("user favorite images in UserHome: ", userFavImagesStore);
  const userFavImgArr = Object.values(userFavImagesStore);
  // console.log("user favorite images array in UserHome: ", userFavImgArr);

  //   console.log("current in UserHome: ", currDate)

  const dispatch = useDispatch();

  const showInfo = (imageId) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [imageId]: true,
    }));
  };

  const notShowInfo = (imageId) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [imageId]: false,
    }));
  };
  // const setFavButton = () => {
  //   setFav(true);
  // };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    dispatch(getAllImageThunk());
    // dispatch(getUserFavImgThunk(sessionUser.id));
  }, [dispatch]);

  if (imagesArr.length < 1) return null;

  //onMouseOver={showInfo(image.id)} onMouseLeave={notShowInfo(image.id)}
  return (
    <>
      <div className="user-home-wrapper">
        <div className="user-home-banner">
          {/* <div className="act">
            <p>All Activity</p>
            <p>What's new?</p>
          </div> */}
          {/* <div className="layout">
            <p>layout 1</p>
            <p>layout 2</p>
            <p>layout 3</p>
          </div> */}
        </div>
        <div className="image-list-div">
          <ul>
            {imagesArr.toReversed().map((image) => (
              <li
                key={image.id}
                className="image-card"
                onMouseOver={() => showInfo(image.id)}
                onMouseLeave={() => notShowInfo(image.id)}
              >
                <div id="userhome-user-info">
                  <div id="userhome-user-photo-wrapper">
                    <img
                      id="userhome-user-photo"
                      src={image.User.profile_photo}
                      alt=""
                    />
                  </div>
                  <div id="name-day">
                    <p>
                      {image.User.first_name} {image.User.last_name}
                    </p>
                    {(() => {
                      const uploadedOn = new Date(image.uploaded_on);
                      const timeDiff = Math.round(
                        (currDate - uploadedOn) / (1000 * 60 * 60 * 24)
                      );
                      if (timeDiff > 1) {
                        return <p id="day">{timeDiff}ds ago</p>;
                      }
                      return <p id="day">{timeDiff}d ago</p>;
                    })()}
                  </div>
                </div>

                <div className="photo">
                  <Link key={image.id} to={`/photos/${image.id}`}>
                    <img src={image.img} alt={image.title} />
                  </Link>
                  {/* {console.log("info in the component: ", info)} */}
                  {info[image.id] ? (
                    // <div id={`photo-info ${info[image.id]}`}>
                    <div id={info[image.id] ? "photo-info" : ""}>
                      <div id="title-description">
                        <Link key={image.id} to={`/photos/${image.id}`}>
                          <p id="image-title">{image.title}</p>
                        </Link>
                        <p id="image-description">{image.description}</p>
                      </div>
                      <div id="count-fav-comment">
                        <p id="image-views">
                          {image.view_count > 1000
                            ? parseFloat(image.view_count) / 1000 + "K"
                            : image.view_count}{" "}
                          views
                        </p>
                        <div id="fav-comment">
                          <Favorites imageId={image.id} />
                          <p>{image.image_favorites_count}</p>
                          {/* <AddUserFav image={image} /> */}
                          <Link to={`/photos/${image.id}`}>
                            <i className="fa-regular fa-comment"></i>
                          </Link>
                          <p>{image.image_comment_count}</p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
