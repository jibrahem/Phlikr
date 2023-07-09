import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { getUserImagesThunk } from "../../store/image.js";
import { updateUserShowcaseThunk } from "../../store/users";
import { useModal } from "../../context/Modal";
import "./ShowcaseModal.css";

function ShowcaseModal({ userImageArr }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { closeModal } = useModal();
  console.log("userImgArr in showcase modal", userImageArr);
  const payload = {};
  for (let i = 0; i < userImageArr.length; i++) {
    payload[userImageArr[i].id] = userImageArr[i].showcase;
  }
  const [showcaseInputs, setShowcaseInputs] = useState(payload);

  // useEffect(() => {
  //   dispatch(getUserImagesThunk);
  // });

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

  const imageClick = () => {
    console.log("ImageClick");
  };

  const handleChange = (imageId, event) => {
    console.log("handle change", imageId, "hefdfdf   ", event.target.checked);
    let nextPayload = { ...showcaseInputs };
    nextPayload[imageId] = event.target.checked;
    setShowcaseInputs(nextPayload);
    // let data = [...showcaseInputs];
    // data[index][event.target.name] = event.target.value;
    // setShowcaseInputs(data);
  };

  if (userImageArr.length < 1) return null;

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
  return (
    <>
      <div className="showcase-modal">
        <form onSubmit={handleSubmit}>
          <div className="image-selector">
            {userImageArr.map((image) => (
              <div className="image-checkbox-wrapper">
                <label className="image-checkbox">
                  {/* <input
                type="checkbox"
                key={image.id}
                id={"input" + image.id}
                checked={showcaseInputs[image.id]}
                onChange={(event) => handleChange(image.id, event)}
              />
              <img
                className="showcase-preview"
                src={image.img}
                onClick={imageClick}
                style={{ "pointer-events": "all" }}
              /> */}
                  <input
                    type="checkbox"
                    onChange={(event) => handleChange(image.id, event)}
                  />
                  <span></span>
                  <img class="img" src={image.img} />
                </label>
              </div>
            ))}
          </div>
          <div className="showcase-submit">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShowcaseModal;
