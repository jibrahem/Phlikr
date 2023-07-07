import { useSelector, useDispatch, } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllImageThunk } from "../../store/image";
import { Link } from "react-router-dom";
import "./UserHome.css";
import CommentModal from "../CommentModal";
import OpenModalButton from '../OpenModalButton';
import { userFavThunk } from "../../store/users";



export default function UserHome() {
  const sessionUser = useSelector((state) => state.session.user);
  const imagesStore = useSelector((state) => state.images.allImages);
  const imagesArr = Object.values(imagesStore);
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const currDate = new Date();

//   console.log("current in UserHome: ", currDate)

  const dispatch = useDispatch();

  const addFavorite = (imageId) => {

    const payload = {
      user_id : sessionUser.id,
      image_id : imageId,

    }
     
   dispatch(userFavThunk(payload));
  }
 
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    dispatch(getAllImageThunk());
  }, []);

  if (imagesArr.length < 1) return null;

    return (
        <>
            <div className='user-home-wrapper'>
                <div className='user-home-banner'>
                    <div>
                        <p>All Activity</p>
                        <p>What's new?</p>
                    </div>
                    <div>
                        <p>layout 1</p>
                        <p>layout 2</p>
                        <p>layout 3</p>
                    </div>
                </div>
                <div className='image-list-div'>

                    <ul>

                        {imagesArr.map((image) => (
                            <li key={image.id} className='image-card'>
                                <Link key={image.id} to={`/photos/${image.id}`}>
                                    <p>{image.User.first_name} {image.User.last_name}</p>
                                    {(() => {
                                        const uploadedOn = new Date(image.uploaded_on);
                                        const timeDiff = Math.round((currDate - uploadedOn) / (1000 * 60 * 60 * 24));
                                        if (timeDiff > 1) {
                                            return <p>{timeDiff}ds ago</p>
                                        }
                                        return <p>{timeDiff}d ago</p>
                                    })()}
                                    <img src={image.img} alt={image.title} />
                                    <p>{image.title}</p>
                                    </Link>
                                    <p>{image.description}</p>
                                    <div>
                                        <div>{image.view_count > 1000 ? parseFloat(image.view_count) / 1000 + "K" : image.view_count} views
                                        </div>
                                        
                                           <div className="icon">
                                            <button
                                              onClick={() => addFavorite(image.id)}>
                                              <i className="fa-regular fa-star"></i>
                                            </button>
                                            
                                            {/* <AddUserFav image={image} /> */}
                                            <OpenModalButton
                                              onItemClick={closeMenu}
                                              modalComponent={<CommentModal />}
                                              itemText= <i className="fa-regular fa-comment"></i>
                                            />
                                            <i className="fa-light fa-album-circle-plus"></i>
                                            {/* <i className="fa-solid fa-tree"></i> we don't need the tree icon*/} 
                                          </div>
                                        
                                    </div>
                                {/* </Link> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );

}
