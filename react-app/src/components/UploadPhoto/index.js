import { useState, useEffect } from "react";
import { createImageThunk } from "../../store/image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UploadPhoto.css";

function UploadPhoto() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // console.log("state", state)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageDetails = {
      title,
      description,
      img,
    };
    const errors = {};

    if(description.length > 100){
      errors.description = "Description must be 100 characters or less"
    }

    if(title.length > 80){
      errors.title = "Title must be 80 characters or less"
    }

    if (
      img &&
      !(img.endsWith(".png") || img.endsWith(".jpg") || img.endsWith(".jpeg"))
    ) {
      errors.img = "Image URL must end with .png, .jpg, or .jpeg";
    }
    if (Object.values(errors).length > 0) {
      setErrors(errors);
    } else {
      const data = await dispatch(createImageThunk(imageDetails, sessionUser));
      history.push("/");
    }
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
      <form className="upload-image-form" onSubmit={handleSubmit}>
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
          Image Url
          <br></br>
          <input
            type="text"
            //  placeholder="Image Url"
            className="upload-image-url"
            value={img}
            maxLength={100}
            onChange={(e) => setImg(e.target.value)}
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
        </label>
      </form>
    </div>
  );
}

export default UploadPhoto;
