// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import "./UserPage.css";

// export default function ProfileBanner({ userInfo, photoCount }) {
//   const sessionUser = useSelector((state) => state.session.user);
//   const { userId } = useParams();

//   const dispatch = useDispatch();

//   return (
//     <>
//       <div id='profile-banner-div>'>
//         <div>
//           <div id='cover-photo'>
//             <img src={userInfo.cover_photo} />
//           </div>
//           <div id='profile-photo'>
//             <img src={userInfo.profile_photo} />
//             <div>
//               <h1>{userInfo.first_name} {userInfo.last_name}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="profile-navigation">
//         <NavLink to={`/${userInfo.id}/people`}>About</NavLink>
//         <NavLink to={`/${userInfo.id}/photos`}>Photostream</NavLink>
//         <NavLink to={`/${userInfo.id}/favorites`}>Faves</NavLink>
//       </div>
//     </>
//   );
// }
