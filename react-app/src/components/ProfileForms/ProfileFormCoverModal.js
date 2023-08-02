import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { getUserImagesThunk } from "../../store/image.js";
import { updateUserShowcaseThunk } from "../../store/users";
import { useModal } from "../../context/Modal";
import "../ShowcaseModal/ShowcaseModal.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileFormCoverModal({ userImageArr }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [coverPhoto, setCoverPhoto] = useState(
    sessionUser.cover_photo ? sessionUser.cover_photo : ""
  );
  console.log("coverphotoid", coverPhoto);
  // const userImages = useSelector((state) => state.session.user);
  // let userImageArr = Object.values(userImages)[0];
  const { closeModal } = useModal();
  console.log("userImgArr in showcase modal", userImageArr);
  const payload = {};
  console.log("userimagearr", userImageArr);
  for (let i = 0; i < userImageArr.length; i++) {
    payload[userImageArr[i].id] = false;
  }
  const [showcaseInputs, setShowcaseInputs] = useState(payload);
  const history = useHistory();
  useEffect(() => {
    dispatch(getUserImagesThunk);
  }, dispatch);

  //build starting state for showcaseInputs
  // setShowcaseInputs(payload);
  // console.log("showcase/starting inputs", showcaseInputs);
  console.log("payload after loading in  sttart data", showcaseInputs);
  //   let bool_list = s{};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("payload on submit", showcaseInputs);
    dispatch(updateUserShowcaseThunk(sessionUser.id, showcaseInputs));
    closeModal();
  };

  // const handleChange = (imageId, e) => {
  //   console.log("input changed");
  //   const values = [...payload];
  //   values[imageId].val = e.target.value;
  // };

  const imageClick = (imageId) => {
    console.log("ImageClick");
    // let nextPayload = { ...showcaseInputs };
    // nextPayload[imageId] = bool;
    // console.log('payload', nextp);
  };

  const redirectClick = () => {
    closeModal();
    history.push("/photos/upload");
  };
  const handleChange = (imageId, event) => {
    console.log("handle change", imageId, "hefdfdf   ");
    let nextPayload = { ...showcaseInputs };
    nextPayload[imageId] = event.target.checked;
    setShowcaseInputs(nextPayload);
    // let data = [...showcaseInputs];
    // data[index][event.target.name] = event.target.value;
    // setShowcaseInputs(data);
  };

  // const updateStore = (imageId, bool) => {
  //   let nextPayload = { ...showcaseInputs };
  //   nextPayload[imageId] = event.target.checked;
  //   setShowcaseInputs(nextPayload);
  // };

  if (userImageArr.length < 1)
    return (
      <button onClick={redirectClick} className="no-uploads">
        Upload some photos to get started!
      </button>
    );

  //   const input_list = [];
  //   for (let i = 0; i < userImgArr.length; i++) {
  //     input_list.push(
  //       <input key={userImgArr[i].id} type="checkbox" value={userImgArr[i].id}>
  //         hi
  //       </input>
  //     );
  // input_list.push(
  //   <img key={userImgArr[i].id + "imgurl"} src={userImgArr[i].img} />
  // );
  //   }
  //   console.log("input list ids", input_list);
  if (userImageArr.length < 1) return null;

  console.log("showcaseInputs", showcaseInputs);
  return (
    <>
      <div className="showcase-modal">
        <form onSubmit={handleSubmit}>
          <div className="image-selector">
            {userImageArr.map((image) => (
              <div className="image-checkbox-container">
                <div className="image-checkbox-wrapper">
                  <input
                    type="checkbox"
                    key={image.id}
                    id={"input" + image.id}
                    checked={showcaseInputs[image.id]}
                    onChange={(event) => handleChange(image.id, event)}
                  />
                  <img
                    className="showcase-preview"
                    src={image.img}
                    // onClick={imageClick(image.id)}
                    // style={{ "pointer-events": "all" }}
                  />
                  {/* <input
                    type="checkbox"
                    onChange={(event) => handleChange(image.id, event)}
                  />
                  <span></span>
                  <img class="img" src={image.img} /> */}
                </div>
              </div>
            ))}
          </div>
          <div className="showcase-submit">
            <button type="submit" className="showcase-form-submit">
              Save Selected Photos
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileFormCoverModal;
