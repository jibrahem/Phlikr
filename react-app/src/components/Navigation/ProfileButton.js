import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()
  const location = useLocation();
  const [show, setShow] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

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

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const showUserInfo =() => {
    setShow(!show);
  }

  const notShowUserInfo = () => {
    setShow(false)
  }


  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  if (user !== null) {
    <ul className={ulClassName} ref={ulRef}>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>
        <button onClick={handleLogout}>Log Out</button>
      </li>
    </ul>
  }

  if (user === null && location.pathname === '/login') {
    return ("")
  }

  if (user === null && location.pathname === '/signup') {
    return ("")
  }

  return (
    <>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
           
          <Link to={'/photos/upload'}>
            <i class="fa-solid fa-cloud-arrow-up"></i>
          </Link>
            
            <div id='nav-profile-img-div' onClick={showUserInfo}>
              <img src={user.profile_photo} id='nav-profile-img'/>
            </div>

            {show ? <div id='nav-user-info'>
              <div id='nav-user-info-p'>
                <p>Hello, {user.username}</p>
                <p id='nav-p'>Now you know how to greet people in Icelandic</p>
              </div>
              {/* <li>{user.username}</li>
              <li>{user.email}</li> */}
                <button onClick={handleLogout}>Log Out</button>
            </div> : ''}
          </>
        ) : (
          <div className="modals">
            <div className="login-nav">
              <button onClick={() => history.push(`/login`)}>
                Log In
              </button>
            </div>
            <div className="sign-up">
              <button onClick={() => history.push(`/signup`)}>
                Sign Up
            </button>
            </div>
          </div>
        )}
      </ul>
    </>
  );
}


export default ProfileButton;
