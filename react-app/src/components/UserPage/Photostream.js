import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './Photostream.css'
import Favorites from "../Favorites";
import Footer from "../Footer/Footer"



export default function PhotostreamPage({ userImagesArr }) {
  const sessionUser = useSelector((state) => state.session.user);

  const currDate = new Date();
  // console.log("currDate in photostream: ", currDate)

  if (userImagesArr.length < 1) return null;



  return (
    <>
      <div className="photo-stream-footer-wrapper">
      {/* <div className="photo-stream-title">Photostream</div> */}
      <ul className="photo-stream-container">
        {userImagesArr[0].map((image, i) => (
          <div key={image.id}>
            {/* {console.log("image in user images page", image[0])} */}
            <div className="photo-stream-user-container">
            <h4 className="photo-stream-user-name">
              {/* {image.User.first_name} {image.User.last_name}'s Post #{i + 1} */}
            </h4>
            {/* <p>{currDate - image.uploadedAt}d ago</p> */}
            </div>
            <NavLink style={{textDecoration: "none"}} key={image.id} to={`/photos/${image.id}`}>
            {/* <p className="photo-stream-image-title">{image.title}</p> */}
            </NavLink>
            <NavLink style={{textDecoration: "none"}} key={image.id} to={`/photos/${image.id}`}>
              <img className="photo-stream-image" src={image.img} alt={image.title} />
            </NavLink>
              {/* <p className="photo-stream-image-description">{ image.description.length < 30 ? image.description : image.description.substring(0,30) + "..."}</p> */}
            <div>
              <div className="photo-stream-view-date">
              <div>
                {/* {image.view_count > 1000
                  ? parseFloat(image.view_count) / 1000 + "K"
                  : image.view_count}{" "}
                views */}
              </div>
              <div className="photo-stream-date">
                {/* {(() => {
                    const uploadedOn = new Date(image.uploaded_on);
                    const timeDiff = Math.round((currDate - uploadedOn) / (1000 * 60 * 60 * 24));
                    if (timeDiff > 1) {
                        return <p>{timeDiff} days ago</p>
                    }
                    return <p>{timeDiff} day ago</p>
                })()} */}
              </div>
              </div>
              <div className="photo-stream-icons">
                {/* <i style={{color: "grey", fontSize: "20px"}}className="fa-regular fa-star"></i> */}
                <Favorites imageId={image.id} />
                <NavLink style={{color: "grey", fontSize: "20px"}} to={`/photos/${image.id}`}><i className="fa-regular fa-comment"></i></NavLink>
                <div className="photo-stream-star">
                  <i className="fa-light fa-album-circle-plus"></i>
                </div>
                {/* <i className="fa-solid fa-tree"></i> */}
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div class="photostream-footer">
          <footer className='splash-page-footer'>
          <span className='splash-span'>About</span>
          <span className='splash-span'>Jobs</span>
          <span className='splash-span'>Blog</span>
          <span className='splash-span'>Developers</span>
          <span className='splash-span'>Guidelines</span>
          <span className='splash-span'>Help</span>
          <span className='splash-span'>Help forum</span>
          <span className='splash-span'>Privacy</span>
          <span className='splash-span'>Terms</span>
          <span className='splash-span'>Cookies</span>
          <span className='splash-span'>English</span>
          <a href="#" class="icon-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icon-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="icon-link"><i class="fab fa-instagram"></i></a>
      </footer>
      </div>     
      </div>    
    </>  
  );
}
// max of 34 characters for description anything more will alter the css layout and ultimately break the page.
// easier to use a validator instead of trying to make css modifications for now 