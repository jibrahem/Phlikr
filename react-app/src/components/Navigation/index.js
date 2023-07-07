import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState } from 'react'

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const [show, setShow] = useState(false);


	const you = () => {
		setShow(true)
	}

	const notYou = () => {
		setShow(false)
	}


	return (
		<nav>
			<ul id={sessionUser ? "user-ul" : ""}>
				<div id='nav-snapr-div'>
					<div className='snapr' onMouseLeave={notYou}>
						<li>
							<NavLink exact to="/"> <span>⚫️⚪️</span>
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

				
			
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navigation;
