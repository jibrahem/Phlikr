import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function PhotostreamPage({ userImagesArr }) {
  const sessionUser = useSelector((state) => state.session.user);

  const currDate = new Date();
  // console.log("currDate in photostream: ", currDate)

  if (userImagesArr.length < 1) return null;



  return (
    <>
      <>Photostream</>
      <ul>
        {userImagesArr[0].map((image) => (
          <div key={image.id}>
            {/* {console.log("image in user images page", image[0])} */}
            <h4>
              {image.User.first_name} {image.User.last_name}
            </h4>
            {/* <p>{currDate - image.uploadedAt}d ago</p> */}
            {(() => {
                const uploadedOn = new Date(image.uploaded_on);
                const timeDiff = Math.round((currDate - uploadedOn) / (1000 * 60 * 60 * 24));
                if (timeDiff > 1) {
                    return <p>{timeDiff}ds ago</p>
                }
                return <p>{timeDiff}d ago</p>
            })()}
            <Link key={image.id} to={`/photos/${image.id}`}>
              <img src={image.img} alt={image.title} />
              <p>{image.title}</p>
            </Link>
            <p>{image.description}</p>
            <div>
              <div>
                {image.view_count > 1000
                  ? parseFloat(image.view_count) / 1000 + "K"
                  : image.view_count}{" "}
                views
              </div>
              <div>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-light fa-album-circle-plus"></i>
                <i className="fa-solid fa-tree"></i>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
