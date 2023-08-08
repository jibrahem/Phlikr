import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState } from 'react';
import { logout } from "../../store/session";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const userInfo = useSelector((state) => state.users.userInfo);
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();


	const you = () => {
		setShow(true);
	}

	const notYou = () => {
		setShow(false);
	}

	const showProfile = () => {
		setProfile(!profile);
	}

	const notShowProfile = () => {
		setProfile(false);
	}

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		// closeMenu()
		history.push('/')
	  };



	return (
		<nav>
			<ul id={sessionUser ? "user-ul" : ""}>
				<div id='nav-snapr-div'>
					<div className='snapr' onMouseLeave={notYou}>
						<li>
							<NavLink exact to="/"> <span>🔵🔴</span>
								<div className='snap'> snapr</div></NavLink>
						</li>
						<div id='nav-you-div' >
							{(() => {
								if (sessionUser) {
									return <div id='nav-you' onMouseOver={you}>You</div>
								}
							})()}
							<div id={show ? 'user-profile-option-show' : 'user-profile-option-hide'}>
								<span><Link to={`/${sessionUser?.id}/people`}>About</Link></span>
								<span><Link to={`/${sessionUser?.id}/photos`}>Photostream</Link></span>
								<span><Link to={`/${sessionUser?.id}/favorites`}>Faves</Link></span>
							</div>
						</div>
					</div>
					<div id='nav-explore-div'>
							{(() => {
								if (sessionUser) {
									return <div id='nav-explore'><Link to='/'>Explore</Link></div>
								}
							})()}
					</div>
				</div>

			{sessionUser ? (
				<>
				<div className="top-nav">
					<div id='nav-upload-profile'>
						<Link to={'/photos/upload'}>
							<i className="fa-solid fa-cloud-arrow-up"></i>
						</Link>
					 	<div className="profile" onClick={showProfile}>
							<img src={sessionUser.profile_photo} alt={sessionUser.user_name}></img>
						</div>
					</div>
					{profile ? <div id='nav-user-info' onMouseLeave={notShowProfile}>
						<p>Ciao, {sessionUser.username}!</p>
						<p>{sessionUser.email}</p>
						<div className='log-out' onClick={handleLogout}>Log out</div>
					</div> : ""}
				</div>

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

				{/* {isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)} */}
			</ul>
		</nav>
	);
}

export default Navigation;
