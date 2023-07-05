import { useSelector, useDispatch, } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllImageThunk } from "../../store/image";
import { Link } from "react-router-dom";
import "./UserHome.css";
import CommentModal from "../CommentModal";
import OpenModalButton from '../OpenModalButton'


export default function UserHome() {
  const sessionUser = useSelector((state) => state.session.user);
  const imagesStore = useSelector((state) => state.images.allImages);
  const imagesArr = Object.values(imagesStore);
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const currDate = new Date();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    dispatch(getAllImageThunk());
  }, []);

  if (imagesArr.length < 1) return null;

  return (
    <>
      <div className="user-home-wrapper">
        <div className="user-home-banner">
          <div className="activity">
            <div className="act">
              <p>All Activity</p>
              <p>What's new?</p>
            </div>
            <div className="layout">
              <p>layout 1</p>
              <p>layout 2</p>
              <p>layout 3</p>
            </div>

          </div>
        </div>
        <div className="image-list-div">
          <ul>
            {imagesArr.map((image) => (
              <li key={image.id} className="image-card">
                <h4>
                  {image.User.first_name} {image.User.last_name}
                </h4>
                <div className="date">
                  <p>{currDate - image.uploadedAt}d ago</p>
                </div>
                <Link key={image.id} to={`/photos/${image.id}`}>
                  <img src={image.img} alt={image.title} />
                </Link>
                <div className="title">
                  <Link key={image.id} to={`/photos/${image.id}`}>
                    <p>{image.title}</p>
                  </Link>
                </div>
                <div className="desc">{image.description}</div>
                <div className="views">
                  <div>
                    {image.view_count > 1000
                      ? parseFloat(image.view_count) / 1000 + "K"
                      : image.view_count}{" "}
                    views
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-star"></i>
                    <OpenModalButton
                      onItemClick={closeMenu}
                      modalComponent={<CommentModal />}
                      itemText= <i className="fa-regular fa-comment"></i>
                    />
                    <i className="fa-light fa-album-circle-plus"></i>
                    <i className="fa-solid fa-tree"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
