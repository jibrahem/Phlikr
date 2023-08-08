import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleImageThunk, updateImageThunk } from "../../store/image";
import { useHistory, useParams } from "react-router-dom";
import "./updatePhoto.css";

export default function UpdatePhoto() {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  console.log("imageId in edit image component: ", imageId)
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const editImg = useSelector((state) => state.images.singleImage);
  const [errors, setErrors] = useState({});
  const [editTitle, setTitle] = useState(editImg.title);
  const [editDescription, setDescription] = useState(editImg.description);


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const imageDetails = {
      // user_id : sessionUser.id,
      title: editTitle,
      description: editDescription,
      image: editImg.img,
    };

    const errors = {};

    if (editDescription.length > 100) {
      errors.description = "Description must be 100 characters or less"
    }

    if (editTitle.length > 60) {
      errors.title = "Title must be 60 characters or less"
    }

    dispatch(updateImageThunk(imageDetails, editImg.id));
    history.push("/");

  };

  useEffect(() =>{
    dispatch(getSingleImageThunk(imageId))
  }, [dispatch, imageId])

  return (
    <div className="whole-update-form">
      {/* <img className='update-background' src={"https://free4kwallpapers.com/uploads/wallpaper/4k-overwatch--+-mobile-versons-wallpaper-1024x768-wallpaper.jpg"} alt="BGI" /> */}

      <img
        className="update-background"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8OSqoAMqjlVNKYv8LqYMBHaNNkk6JVXk2g&usqp=CAU"
        }
        alt="BGI"
      />
      <form className="update-image-form" onSubmit={handleSubmit}>
        <h3 className="update-title">Update Photo</h3>
        <label className="update-label">
          Title
          <br></br>
          <input
            type="text"
            className="update-image-title"
            value={editTitle}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              fontFamily:
                "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "14px",
            }}
          />
        </label>
        <div className="errors">{errors.title}</div>
        <div className="errors">{errors.img}</div>
  
          <label className='upload-label'>
            Description
            <br></br>
            <textarea
              type="textarea"
              className='update-image-description'
              value={editDescription}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif', 
                       fontSize: "14px"
              }}  

            ></textarea>
          </label>
          <label>
            <button className='update-image-btn'>Update</button>
          </label>
        </form>
        </div>
    )
}
