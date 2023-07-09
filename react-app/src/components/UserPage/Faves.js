import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { getUserFavImgThunk } from "../../store/image";
import './UserPage.css';
import Comments from "../Image/comments";
import Favorites from "../Favorites";

export default function FavesPage() {
  const [showComment, setShowComment] = useState(false);
  const [imgDetail, setImgDetail] = useState(false);
  const userFavImages = useSelector((state) => state.images.userFavImg);
  // console.log("user fav images store in Fav component: ", userFavImages);
  const userFavImgArr = Object.values(userFavImages);
  // console.log("user fav image array in Fav: ", userFavImgArr);
  const sessionUser = useSelector((state) => state.session.user);
  // console.log("user in faves component: ", sessionUser)
  
  const dispatch = useDispatch();

  // const currDate = Date();
  const favComment = () => {
    setShowComment(!showComment);
  }

  const showImgDetail = (imageId) => {
    setImgDetail((prevImgDetail) => ({
      ...prevImgDetail,
      [imageId]: true,
    }));
  };

  const hideImgDetail = (imageId) => {
    setImgDetail((prevImgDetail) => ({
      ...prevImgDetail,
      [imageId]: false,
    }));
  }

  useEffect(() => {
    dispatch(getUserFavImgThunk(sessionUser.id))
  }, [dispatch]);

 if (userFavImgArr.length < 1) return null;

 
  return (
    <>
    <div id='user-fav-container'>
      <ul>
        {userFavImgArr.map((image) => (
          <div className='user-fav-div' key={image.id}>
            <div  className="fav-img" >
              <Link key={image.id} to={`/photos/${image.id}`}>
                <img src={image.img} alt={image.title} onMouseOver={() => showImgDetail(image.id)} onMouseLeave={() => hideImgDetail(image.id)} />
              </Link>
            </div>
             {/* {console.log("image Detail in the loop: ", imgDetail[image.id])} */}
            
            <div id={imgDetail[image.id] ? 'title-name-fav-comment-div' : 'no-detail'}
            onMouseOver={() => showImgDetail(image.id)} onMouseLeave={() => hideImgDetail(image.id)}
            
            >
              <div id='title-name'>
                <Link to={`/photos/${image.id}`}>
                  <p id='title'>{image.title}</p>
                </Link>
                <Link to={`/`}>
                  <p id='name'>by {image.User.first_name} {image.User.last_name}</p>
                </Link>
              </div>
              <div id='fav-comment'>
                <div id='fav-star'>
                  {/* <i className="fa-solid fa-star"></i> */}
                  <Favorites imageId={image.id} />
                  <p>{image.image_favorites_count}</p>
                </div>
                <div id='fav-comment-button'>
                  <button onClick={favComment}>
                    <Link to={`/photos/${image.id}`}><i className="fa-regular fa-comment"></i></Link>
                  </button>
                  <p>{image.image_comment_count}</p>
                </div>
                {/* <i className="fa-light fa-album-circle-plus"></i> */}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
    </>
  );
}
