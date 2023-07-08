import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateImageThunk } from '../../store/image';
import { useHistory } from 'react-router-dom';
import './updatePhoto.css';


export default function UpdatePhoto() {
    const dispatch = useDispatch;
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState(sessionUser.title);
    const [description, setDescription] = useState(sessionUser.description);
    const [img, setImg] = useState(sessionUser.img);

    console.log("hello")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageDetails = {
            title,
            description,
            img
        }
        const data = await dispatch(updateImageThunk(imageDetails))
        history.push('/');
    }
    
    return (
        <div className='whole-update-form'>
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
              // placeholder="Title"
              className='update-image-title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif', 
                       fontSize: "14px"
              }}  
            />
          </label>
          <label className='update-label'>
          Image Url
          <br></br>
            <input 
               type="text" 
              //  placeholder="Image Url"
               className='update-image-url'
               value={img}
               onChange={(e) => setImg(e.target.value)}
               required
               style={{ fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif', 
                        fontSize: "14px"
               }}  
            />
          </label>
          <label className='upload-label'>
            Description
            <br></br>
            <textarea
              type="textarea"
              // placeholder="Description"
              className='update-image-description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ fontFamily: 'Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif', 
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
