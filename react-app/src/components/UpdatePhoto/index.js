import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateImageThunk } from '../../store/image';
import { useHistory } from 'react-router-dom';
import './updatePhoto.css';


export default function UpdatePhoto() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const editImg = useSelector((state) => state.images.singleImage)
  console.log("editImg in update image component: ", editImg)
  const [errors, setErrors] = useState({});
  // const [title, setTitle] = useState(sessionUser.title);
  const [editTitle, setTitle] = useState('');
  // const [description, setDescription] = useState(sessionUser.description);
  const [editDescription, setDescription] = useState('');
  // const [img, setImg] = useState(sessionUser.img);
  const [editImgUrl, setImg] = useState(editImg.img);


  console.log("hello")

  const handleSubmit = async (e) => {
    console.log("handleSubmit function is running~~~~")
    e.preventDefault();
    const imageDetails = {
      // user_id : sessionUser.id,
      title: editTitle,
      description: editDescription,
      img: editImgUrl,
    }

    const errors = {}

    if (editImgUrl && !(editImgUrl.endsWith('.png') || editImgUrl.endsWith('.jpg') || editImgUrl.endsWith('.jpeg'))) {
      errors.img = 'Image URL must end with .png, .jpg, or .jpeg'
    }
    if (Object.values(errors).length > 0) {
      setErrors(errors);
    } else {
      const data = await dispatch(updateImageThunk(imageDetails, editImg.id))
      history.push('/');
    }
  }

  return (
    <div className='whole-update-form'>
      {/* <img className='update-background' src={"https://free4kwallpapers.com/uploads/wallpaper/4k-overwatch--+-mobile-versons-wallpaper-1024x768-wallpaper.jpg"} alt="BGI" /> */}

      <img className='update-background' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8OSqoAMqjlVNKYv8LqYMBHaNNkk6JVXk2g&usqp=CAU"} alt="BGI" />
      {/* <span>""</span> */}
      <form className="update-image-form" onSubmit={handleSubmit}>
        <h3 className='update-title'>Update Photo</h3>
        {/* <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul> */}
        <label className='update-label'>
          Title
          <br></br>
          <input
            type="text"
            placeholder={editImg.title}
            className='update-image-title'
            value={editTitle}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: "14px"
            }}
          />
        </label>
        <div className='errors'>{errors.img}</div>
        <label className='update-label'>
          Image Url
          <br></br>
          <input
            type="text"
            placeholder={editImg.img}
            className='update-image-url'
            value={editImgUrl}
            onChange={(e) => setImg(e.target.value)}
            //  required
            style={{
              fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: "14px"
            }}
          />
        </label>
        <label className='upload-label'>
          Description
          <br></br>
          <textarea
            type="textarea"
            placeholder={editImg.description}
            className='update-image-description'
            value={editDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: "14px"
            }}

          ></textarea>
        </label>
        <label>
          <button className='update-image-btn' onSubmit={handleSubmit}>Update</button>
        </label>
      </form>
    </div>
  )
}
