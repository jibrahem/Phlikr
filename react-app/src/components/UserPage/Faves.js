import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getUserFavImgThunk } from "../../store/image";
import './UserPage.css';
import Comments from '../CommentModal/index';

export default function FavesPage() {
  const [showComment, setShowComment] = useState(false);
  const userFavImages = useSelector((state) => state.images.userFavImg);
  // console.log("user fav images store in Fav component: ", userFavImages);
  const userFavImgArr = Object.values(userFavImages);
  // console.log("user fav image array in Fav: ", userFavImgArr);
  const sessionUser = useSelector((state) => state.session.user);
  // console.log("user in faves component: ", sessionUser)
  
  const dispatch = useDispatch()

  // const currDate = Date();
  const favComment = () => {
    setShowComment(true);
  }

  useEffect(() => {
    dispatch(getUserFavImgThunk(sessionUser.id))
  }, [dispatch]);

 if (userFavImgArr.length < 1) return null;

 
  return (
    <>
      <>Faves</>
      <ul>
        {userFavImgArr.map((image) => (
          <div id='user-fav-div'>
            <Link key={image.id} to={`/photos/${image.id}`}>
              <img src={image.img} alt={image.title} />
              <p>{image.title}</p>
            </Link>
            <Link to={`/`}>
              <p>by {image.User.first_name} {image.User.last_name}</p>
            </Link>
            <div>
              <div>
                <div id='fav-star'>
                  <i className="fa-regular fa-star"></i>
                  <p>{image.image_favorites_count}</p>
                </div>
                <div id='fav-comment'>
                  <button onClick={favComment}>
                    <i className="fa-regular fa-comment"></i>
                  </button>
                  <p>{image.image_comment_count}</p>
                </div>
                <i className="fa-light fa-album-circle-plus"></i>
              </div>
              {/* {showComment ? <div>
                <Comments image={image}/>
              </div> : null} */}

            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
