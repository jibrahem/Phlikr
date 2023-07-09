import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getSingleImageThunk, deleteImageThunk } from "../../store/image";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import camera from "./resource/camera.png";
import aperture from "./resource/aperture.png";
import angle from "./resource/angle.png";
import flash from "./resource/flash.png";
import iso from "./resource/iso.png";
import scale from "./resource/scale.png";
import info from "./resource/info.png";
import EXIF from "./exif";
import SingelImageFooter from "./SingleImageFooter";
import Footer from "../Footer/Footer";
import Comments from "./comments";
import './SingleImage.css'

console.log("Before userParams");

export default function SingleImage() {
  // console.log("SingleImage in SingelImage component: ");
  const { imageId } = useParams();
  const singleImage = useSelector((state) => state.images.singleImage);
  // console.log("singleImage Store: ", singleImage);
  const sessionUser = useSelector((state) => state.session.user);
  const [showEXIF, setShowEXIF] = useState(false);
  const [showEdit, setShowEdit] = useState(false);


  // const singleImageArr = Object.values(singleImage)
  const dispatch = useDispatch();
  const history = useHistory();

  const showEXIFFunction = () => {
    setShowEXIF(!showEXIF);
  };

  const editImg = () => {
    setShowEdit(!showEdit)
  }

  const deleteImg = () => {
    dispatch(deleteImageThunk(singleImage.id));
    history.push(`/${sessionUser.id}/photos`);
  }


  useEffect(() => {
    dispatch(getSingleImageThunk(imageId));
    // dispatch(getAllImageThunk());
  }, [dispatch, imageId]);

    if (!singleImage.User) return null;

   

    return (
        <>
            <div id='single-image-div'>
                <div id='image-container'>
                    <img src={singleImage.img} />
                    <div className="iconss">
                        <i className="fa-regular fa-star"></i>
                        {/* <i className="fa-solid fa-folder-plus"></i> */}
                        {/* <i className="fa-regular fa-comment"></i> */}
                        {/* <i className="fa-light fa-album-circle-plus"></i> */}
                        {/* <i className="fa-solid fa-share"></i> */}
                        {singleImage.User.id === sessionUser.id ? 
                        <div onClick={editImg}>
                          <i className="fa-solid fa-pen-to-square"></i></div> : null}
                        </div>
                        {showEdit ? 
                        <div id='delete-img-div'><p onClick={deleteImg}>Delete Image</p></div> : null}
                    {/* <img src={singleImage.img} /> */}
                </div>
                <div id='single-image-info-div'>
                    <div id='single-image-info-left'>
                        <div id='single-image-comment-div'>
                            {(() => {
                                if (sessionUser) return <img src={sessionUser.profile_photo} />
                                else return <img src='https://i.etsystatic.com/41306100/r/il/848c24/4758546931/il_1140xN.4758546931_o7nt.jpg' />
                            })()}
                            <div id='author-info'>
                                <h3>{singleImage.User.first_name} {singleImage.User.last_name}</h3>
                                <h4>{singleImage.title}</h4>
                            </div>
                            {/* started working on updatePhoto */}
                            {/* <div className="temp-spot-for-update">
                              <Link to={`${imageId}/update`}>Update Photo</Link>
                            </div> */}
                            {singleImage.User.id === sessionUser.id ? 
                            <div>
                              <Link to={`/${singleImage.id}/update`}><i className="fa-solid fa-pen-to-square"></i></Link></div> : null}
                        </div>
                        <div id='single-image-pro-fav-div'>
                            <div className="appreciate">
                                <i className="fa-solid fa-gift"></i>
                                <p>Show your appreciation with the gift of Snapr Pro</p>
                            </div>
                            <div className="fav">
                                <i className="fa-regular fa-star"></i>
                                <p>Rough lyn, Buana sari and 7 more people faved this</p>
                            </div>
                        </div>
                    </div>
                    <Comments
                        image={singleImage} />
                    <div id='single-image-info-right'>
                        <div id='views-faves-comment'>
                            <div id='views-container'>
                              <p style={{fontSize: "20px"}}>{singleImage.view_count}</p>
                              <span style={{fontSize: "14px", color: "#898989", fontWeight: "400"}}>views</span>
                            </div>
                            <div id='favs-container'>
                              <span style={{fontSize: "20px"}}>100</span>
                              <p style={{fontSize: "14px", color: "#898989", fontWeight: "400"}}>faves</p>
                            </div>
                            <div id='comments-count-container'>
                              <span style={{fontSize: "20px"}}>0</span>
                              <p style={{fontSize: "14px", color: "#898989", fontWeight: "400"}}>comments</p>
                            </div>
                            {/* <p>Uploaded on {singleImage.uploaded_on}</p>
                            <i className="fa-regular fa-copyright"></i>
                            <p>All rights reserved</p> */}
                        </div>
                        <hr></hr>
                        <div id='equipment-info'>
                            <div id='camera'>
                                <img src={camera} />
                                <div className="camera-info">
                                  <p style={{color: "#006dac", marginTop: "6px", fontSize: "14px"}}>Sony ILCE-7RM3</p>
                                  <p style={{marginTop: "6px", fontSize: "14px"}}>Voitlander</p>
                                  <p style={{marginTop: "6px", fontSize: "14px"}}>NOKTON 21mm</p>
                                  <p style={{marginTop: "6px", fontSize: "14px"}}>F1.4 Aspherical</p>
                                </div>
                            </div>
                            <div id='camera-details'>
                                <div className="camera-details-sec1">
                                  <div className="cds1-container">
                                    <img src={aperture} />
                                    <p style={{marginLeft: "10px"}}>f/8.0</p>
                                  </div>
                                  <div className="cds1-container">
                                    <img src={scale} />
                                    <p style={{marginLeft: "10px"}}>1/500</p>
                                  </div>
                                  <div style={{width: "190px"}} className="cds1-container">
                                    <img src={flash} />
                                    <p style={{marginLeft: "10px"}}>Flash (off, did not fire)</p>
                                  </div>
                                </div>
                                <div className="camera-details-sec2">
                                  <div div style={{width: "190px"}} className="cds2-container">
                                    <img src={angle} />
                                    <p style={{marginLeft: "10px"}}>21.0 mm</p>
                                  </div>
                                  <div className="cds2-container">
                                    <img src={iso} />
                                    <p style={{marginLeft: "10px"}}>800</p>
                                  </div>
                                  <div className="cds2-container">
                                    <img src={info} />
                                    <p
                                        onClick={showEXIFFunction}
                                        style={{color: "#006dac", marginLeft: "10px"}}
                                    >Show EXIF</p>
                                    {showEXIF ? <EXIF /> : ""}
                                  </div>
                                </div>
                            </div>
                            <hr style={{marginTop: "20px"}}></hr>
                            <div id='additional-info'>
                              <h5 style={{fontSize: "15px", fontWeight: "normal", marginTop: "15px"}}>Additional Info</h5>
                                <div className="ai-container">
                                  <i style={{color: "#898989"}} className="fa-solid fa-lock-open"></i>
                                  <div className="add-info-sub-container">
                                    <p style={{marginLeft: "10px"}}>Viewing privacy</p>
                                    <p style={{marginLeft: "252px", color: "black", fontSize: "13px"}}>Public</p>
                                  </div>
                                </div>
                                <div className="ai-container">
                                  <i style={{color: "#898989"}} className="fa-solid fa-circle-check"></i>
                                  <div className="add-info-sub-container">
                                    <p style={{marginLeft: "10px"}}>Safety level</p>
                                    <p style={{marginLeft: "286px", color: "black", fontSize: "13px"}}>Safe</p>
                                  </div>
                                </div>
                                <div className="ai-container">
                                  <i style={{color: "#898989"}} className="fa-regular fa-image"></i>
                                  <div className="add-info-sub-container">
                                    <p style={{marginLeft: "10px"}}>Content type</p>
                                    <p style={{marginLeft: "269px", color: "black", fontSize: "13px"}}>Photo</p>
                                  </div>
                                </div>
                                <div className="ai-container">
                                <i style={{color: "#898989"}} className="fa-solid fa-circle-info"></i>
                                  <p style={{color: "#006dac", fontSize: "12px", marginLeft: "10px"}}>License History</p>
                                </div>
                                <div className="ai-container">
                                  <i style={{color: "#898989"}} className="fa-regular fa-flag"></i>
                                  <p style={{color: "#006dac", fontSize: "12px", marginLeft: "10px"}}>Flag Photo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
              <Footer />
            </div>
          </div>
    </>
  );
}

           {/* <div id='single-image-footer'>
  return (
    <>
      <div id="single-image-div">
        <div id="image-container">
          <img src={singleImage.img} />
          <i className="fa-regular fa-star"></i>
          <i className="fa-solid fa-folder-plus"></i>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-light fa-album-circle-plus"></i>
          <i className="fa-solid fa-share"></i>
          <img src={singleImage.img} />
        </div>
        <div id="single-image-info-div">
          <div id="single-imgae-info-left">
            <div id="author-info">
              <p>
                {singleImage.User.first_name} {singleImage.User.last_name}
              </p>
              <p>{singleImage.title}</p>
            </div>
            <div id="single-image-pro-fav-div">
              <i className="fa-solid fa-gift"></i>
              <p>Show your appreciation with the gift of Flickr Pro</p>
              <i className="fa-regular fa-star"></i>
              <p>Rough lyn, Buana sari and 7 more people faved this</p>
            </div>
            <div id="single-image-comment-div">
              {(() => {
                if (sessionUser) return <img src={sessionUser.profile_photo} />;
                else
                  return (
                    <img src="https://i.etsystatic.com/41306100/r/il/848c24/4758546931/il_1140xN.4758546931_o7nt.jpg" />
                  );
              })()}
            </div>
          </div>
          <Comments image={singleImage} />
          <div id="single-image-info-right">
            <div id="views-faves-comment">
              <p>{Math.floor(singleImage.view_count / 2)} views</p>
              <p>faves</p>
              <p>comment counts</p>
              <p>Uploaded on {singleImage.uploaded_on}</p>
              <i className="fa-regular fa-copyright"></i>
              <p>All rights reserved</p>
            </div>
            <div id="equipment-info">
              <div id="camera">
                <img src={camera} />
                <p>Sony ILCE-7RM3</p>
                <p>Voitlander</p>
                <p>NOKTON 21mm</p>
                <p>F1.4 Aspherical</p>
              </div>
              <div id="camera-details">
                <img src={aperture} />
                <p>f/8.0</p>
                <img src={scale} />
                <p>1/500</p>
                <img src={flash} />
                <p>Flash (off, did not fire)</p>
                <img src={angle} />
                <p>21.0 mm</p>
                <img src={iso} />
                <p>800</p>
                <img src={info} />
                <p onClick={showEXIFFunction}>Show EXIF</p>
                {showEXIF ? <EXIF /> : ""}
              </div>
              <div id="additional-info">
                <i className="fa-solid fa-lock-open"></i>
                <p>Viewing privacy</p>
                <p>Public</p>
                <i className="fa-solid fa-circle-check"></i>
                <p>Safety level</p>
                <p>Safe</p>
                <i className="fa-regular fa-image"></i>
                <p>Content type</p>
                <p>Photo</p>
                <i className="fa-solid fa-circle-info"></i>
                <p>License History</p>
                <i className="fa-regular fa-flag"></i>
                <p>Flag Photo</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div id='single-image-footer'>
                <SingelImageFooter />
            </div> */}