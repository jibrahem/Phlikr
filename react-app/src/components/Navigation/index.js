import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav>
			<ul>
				<div className='snapr'>
					<li>
						<NavLink exact to="/"> <span>🔵🔴</span>snapr</NavLink>
					</li>
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
