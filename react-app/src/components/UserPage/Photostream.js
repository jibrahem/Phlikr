// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, NavLink } from "react-router-dom";
// import { getUserImagesThunk } from "../../store/image";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import './Photostream.css'
// import Favorites from "../Favorites";
// import Footer from "../Footer/Footer"



// export default function PhotostreamPage({ userImagesArr }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   const currDate = new Date();
//   // console.log("currDate in photostream: ", currDate)

//   if (userImagesArr.length < 1) return null;



//   return (
//     <>
//       <div className="photo-stream-footer-wrapper">
//       {/* <div className="photo-stream-title">Photostream</div> */}
//       <ul className="photo-stream-container">
//   {userImagesArr[0].map((image, i) => (
//     <div className="photo-stream-item" key={image.id}>
//       <div className="photo-stream-user-container">
//         <h4 className="photo-stream-user-name">
//           {/* {image.User.first_name} {image.User.last_name}'s Post #{i + 1} */}
//         </h4>
//       </div>
//       <NavLink style={{ textDecoration: "none" }} key={image.id} to={`/photos/${image.id}`}>
//         {/* <p className="photo-stream-image-title">{image.title}</p> */}
//         <img className="photo-stream-image" src={image.img} alt={image.title} />
//         <span className="photo-stream-tooltip">{image.title}</span>
//       </NavLink>
//       {/* <p className="photo-stream-image-description">{ image.description.length < 30 ? image.description : image.description.substring(0,30) + "..."}</p> */}
//       <div>
//         <div className="photo-stream-view-date">
//           <div>
//             {/* {image.view_count > 1000
//               ? parseFloat(image.view_count) / 1000 + "K"
//               : image.view_count}{" "}
//             views */}
//           </div>
//           <div className="photo-stream-date">
//             {/* {(() => {
//               const uploadedOn = new Date(image.uploaded_on);
//               const timeDiff = Math.round((currDate - uploadedOn) / (1000 * 60 * 60 * 24));
//               if (timeDiff > 1) {
//                 return <p>{timeDiff} days ago</p>;
//               }
//               return <p>{timeDiff} day ago</p>;
//             })()} */}
//           </div>
//         </div>
//         <div className="photo-stream-icons">
//           {/* <i style={{color: "grey", fontSize: "20px"}}className="fa-regular fa-star"></i> */}
//           <Favorites imageId={image.id} />
//           <NavLink style={{ color: "grey", fontSize: "20px" }} to={`/photos/${image.id}`}>
//             <i className="fa-regular fa-comment"></i>
//           </NavLink>
//           <div className="photo-stream-star">
//             <i className="fa-light fa-album-circle-plus"></i>
//           </div>
//           {/* <i className="fa-solid fa-tree"></i> */}
//         </div>
//       </div>
//     </div>
//   ))}
// </ul>
//       <div class="photostream-footer">
//           <footer className='splash-page-footer'>
//           <span className='splash-span'>About</span>
//           <span className='splash-span'>Jobs</span>
//           <span className='splash-span'>Blog</span>
//           <span className='splash-span'>Developers</span>
//           <span className='splash-span'>Guidelines</span>
//           <span className='splash-span'>Help</span>
//           <span className='splash-span'>Help forum</span>
//           <span className='splash-span'>Privacy</span>
//           <span className='splash-span'>Terms</span>
//           <span className='splash-span'>Cookies</span>
//           <span className='splash-span'>English</span>
//           <a href="#" class="icon-link"><i class="fab fa-facebook-f"></i></a>
//           <a href="#" class="icon-link"><i class="fab fa-twitter"></i></a>
//           <a href="#" class="icon-link"><i class="fab fa-instagram"></i></a>
//       </footer>
//       </div>     
//       </div>    
//     </>  
//   );
// }


// // import { useState, useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link, NavLink } from "react-router-dom";
// // import { getUserImagesThunk } from "../../store/image";
// // import { getUserFavImgThunk } from "../../store/image";
// // import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// // import './Photostream.css'
// // import Favorites from "../Favorites";
// // import Footer from "../Footer/Footer"



// // export default function PhotostreamPage({ userImagesArr }) {
// //   const sessionUser = useSelector((state) => state.session.user);

// //   if (userImagesArr.length < 1) return null;

// //   return (
// //     <>
// //       <div className="photo-stream-footer-wrapper">
// //         <div className="photo-stream-header">
// //           <div className="photo-stream-header-date-view">
// //             <div className="photo-stream-date-uploaded">Date Uploaded</div>
// //             <div className="photo-stream-public-view">Public View</div>
// //           </div>
// //         <div className="photo-stream-header-icons">
// //           <button className="photo-stream-button" style={{border: "none"}}><i class="fas fa-pencil-alt"></i></button>
// //           <button className="photo-stream-button" style={{border: "none"}}><i style={{paddingLeft: "20px"}} class="fas fa-search"></i></button>
// //         </div>
// //       </div>
// //       <ul className="photo-stream-container">
// //         {userImagesArr[0].map((image, i) => (
// //           <div key={image.id}>
// //             <div className="photo-stream-user-container">
// //               <h4 className="photo-stream-user-name">
// //               </h4>
// //             </div>
// //             <NavLink style={{textDecoration: "none"}} key={image.id} to={`/photos/${image.id}`}>
// //               <img className="photo-stream-image" src={image.img} alt={image.title} />
// //             </NavLink>
// //             <div>
// //               <div className="photo-stream-view-date"></div>
// //               <div className="photo-stream-icons">
// //                 {/* <Favorites imageId={image.id} />
// //                 <NavLink style={{color: "grey", fontSize: "20px"}} to={`/photos/${image.id}`}><i className="fa-regular fa-comment"></i></NavLink> */}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </ul>
// //       <div class="photostream-footer">
// //           <footer className='splash-page-footer'>
// //           <span className='splash-span'>About</span>
// //           <span className='splash-span'>Jobs</span>
// //           <span className='splash-span'>Blog</span>
// //           <span className='splash-span'>Developers</span>
// //           <span className='splash-span'>Guidelines</span>
// //           <span className='splash-span'>Help</span>
// //           <span className='splash-span'>Help forum</span>
// //           <span className='splash-span'>Privacy</span>
// //           <span className='splash-span'>Terms</span>
// //           <span className='splash-span'>Cookies</span>
// //           <span className='splash-span'>English</span>
// //           <a href="#" class="icon-link"><i class="fab fa-facebook-f"></i></a>
// //           <a href="#" class="icon-link"><i class="fab fa-twitter"></i></a>
// //           <a href="#" class="icon-link"><i class="fab fa-instagram"></i></a>
// //       </footer>
// //       </div>     
// //       </div>    
// //     </>  
// //   );
// // }