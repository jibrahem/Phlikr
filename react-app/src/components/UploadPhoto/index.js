import { useState, useEffect } from "react";
import { createImageThunk } from "../../store/image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSingleImageThunk } from "../../store/image";
import "./UploadPhoto.css";

function UploadPhoto() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { imageId } = useParams()
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // console.log("state", state)
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const imageDetails = {
    //   title,
    //   description,
    //   img,
    // };
    const errors = {};

    if(description.length > 100){
      errors.description = "Description must be 100 characters or less"
    }

    if(title.length > 60){
      errors.title = "Title must be 60 characters or less"
    }

    if (Object.values(errors).length > 0) {
      setErrors(errors);
    } 
    // if (
    //   img &&
    //   !(img.endsWith(".png") || img.endsWith(".jpg") || img.endsWith(".jpeg"))
    // ) {
    //   errors.img = "Image URL must end with .png, .jpg, or .jpeg";
    // }
    // if (Object.values(errors).length > 0) {
    //   setErrors(errors);
    // } 
    // else {
    //   const data = await dispatch(createImageThunk(imageDetails, sessionUser));
    //   history.push("/");
    // }

    const formData = new FormData();
        formData.append("image", img);
        formData.append("title", title);
        formData.append("description", description);
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);
        // const newImage = await dispatch(createImageThunk(formData, sessionUser));
        // console.log("new image in single image: ", newImage)
        await dispatch(createImageThunk(formData, sessionUser));
        // await dispatch(getSingleImageThunk(imageId))
        history.push("/");
  };

  return (
    <div className="whole-upload-form">
      <img
        className="upload-background"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8OSqoAMqjlVNKYv8LqYMBHaNNkk6JVXk2g&usqp=CAU"
        }
        alt="BGI"
      />
      {/* <span>""</span> */}
      <form 
        className="upload-image-form" 
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h3 className="upload-title">Upload Photo</h3>
        {/* <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul> */}

        <label className="upload-label">
          Title
          <br></br>
          <input
            type="text"
            // placeholder="Title"
            className="upload-image-title"
            value={title}
            maxLength={250}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              fontFamily:
                "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "14px",
            }}
          />
          <div className="errors">{errors.title}</div>
          <div className="errors">{errors.img}</div>
        </label>
        <label className="upload-label">
          Image File
          <br></br>
          <input
            // type="text"
            type='file'
            accept="image/*"
            //  placeholder="Image Url"
            className="upload-image-url"
            // value={img}
            // maxLength={100}
            onChange={(e) => setImg(e.target.files[0])}
            required
            style={{
              fontFamily:
                "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "14px",
            }}
          />
        </label>
        <div className="errors">{errors.description}</div>
        <label className="upload-label">
          Description
          <br></br>
          <textarea
            type="textarea"
            // placeholder="Description"
            className="upload-image-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            minLength={1}
            maxLength={200}
            required
            style={{
              fontFamily:
                "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "14px",
            }}
          ></textarea>
        </label>
        <label>
          <button className="upload-image-btn" onSubmit={handleSubmit}>
            Upload
          </button>
          {(imageLoading)&& <p>Loading...</p>}
        </label>
      </form>
    </div>
  );
}

export default UploadPhoto;
