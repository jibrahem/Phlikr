// import { csrfFetch } from "./csrf";

//type string

const GET_ALL_IMAGES = "image/GET_ALL_IMAGES";
const CREATE_IMAGE = "image/CREATE_IMAGE";
const UPDATE_IMAGE = "image/UPDATE_IMAGE";
const DELETE_IMAGE = "image/DELETE_IMAGE";
const GET_USER_IMAGES = "image/GET_USER_IMAGES";
const GET_SINGLE_IMAGE = "image/GET_SINGLE_IMAGE";
const GET_IMAGE_COMMENTS = "image/GET_IMAGE_COMMENTS";

//action creator
const getAllImages = (images) => ({
  type: GET_ALL_IMAGES,
  images,
});

const createImage = (image) => ({
  type: CREATE_IMAGE,
  image,
});

const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  image,
});

const deleteImage = (image_id) => ({
  type: DELETE_IMAGE,
  image_id,
});

const getUserImages = (images) => ({
  type: GET_USER_IMAGES,
  images,
});

const getSingleImage = (image) => ({
  type: GET_SINGLE_IMAGE,
  image,
})

const getImageComments = (image) => ({
  type: GET_IMAGE_COMMENTS,
  image,
})

//thunk
export const getAllImageThunk = () => async (dispatch) => {
  try {
    const res = await fetch("/api/images");

    if (res.ok) {
      const images = await res.json();
      dispatch(getAllImages(images));
      return images;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const createImageThunk = (image) => async (dispatch) => {
  try {
    const res = await fetch("/api/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });

    if (res.ok) {
      const newImage = await res.json();
      dispatch(createImage(newImage));
      return newImage;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const updateImageThunk = (image) => async (dispatch) => {
  try {
    const res = await fetch(`/api/images/${image.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });

    if (res.ok) {
      const updatedImage = await res.json();
      dispatch(updateImage(updatedImage));
      return updatedImage;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const deleteImageThunk = (image_id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/images/${image_id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      dispatch(deleteImage(image_id));
      return;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const getUserImagesThunk = (user_id) => async (dispatch) => {
  try {
    // console.log("userimages user Id", user_id);
    const res = await fetch(`/api/images/user/${user_id}`);

    if (res.ok) {
      const userImages = await res.json();
      dispatch(getUserImages(userImages));
      return userImages;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const getSingleImageThunk = (imageId) => async (dispatch) => {
  console.log("single image in thunk!!!!!")
  try {
    const res = await fetch(`/api/images/${imageId}`);

    if (res.ok) {
      const singleImage = await res.json();
      console.log("singleImage in the thunk: ", singleImage)
      dispatch(getSingleImage(singleImage));
      return singleImage;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

export const getImageCommentsThunk = (image_id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/images/${image_id}/comments`);

    if (res.ok) {
      const imageComments = await res.json();
      dispatch(getImageComments(imageComments));
      return imageComments;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
}

//reducer function

const initialState = { allImages: {}, userImages: {}, singleImage: {}, imageComments: {} };

const imageReducer = (state = initialState, action) => {
  let newState = {};
  // console.log("Image state in reducer function: ", action, state);

  switch (action.type) {
    case GET_ALL_IMAGES: {
      newState = { ...state, allImages: {} };
      action.images.images.forEach((image) => {
        newState.allImages[image.id] = image;
      });
      return newState;
    }
    case CREATE_IMAGE: {
      newState = { ...state, userImages: { ...state.userImages } };
      newState.singleImage = action.image;
      return newState;
    }
    case UPDATE_IMAGE: {
      newState = { ...state, singleImage: { ...state.singleImage } };
      newState.singleImage = action.image;
      return newState;
    }
    case DELETE_IMAGE: {
      newState = { ...state, userImages: { ...state.userImages } };
      delete newState.userImages[action.image_id];
      return newState;
    }
    case GET_USER_IMAGES: {
      newState = { ...state, userImages: { ...state.userImages } };
      newState.userImages = action.images;
      return newState;
    }
    case GET_SINGLE_IMAGE: {
      newState = { ...state, singleImage: { ...state.singleImage } };
      newState.singleImage = action.image;
      return newState;
    }
    case GET_IMAGE_COMMENTS: {
      newState = { ...state, imageComments: {} };
      action.image.comments.forEach((comment) => {
        newState.imageComments[comment.id] = comment;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default imageReducer;
