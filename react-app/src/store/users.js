//type string

const ADD_USER_FAV = "users/ADD_USER_FAV";
const GET_USER_INFO = "users/GET_USER_INFO";
const UPDATE_USER_INFO = "users/UPDATE_USER_INFO";
const UPDATE_USER_SHOWCASE = "users/UPDATE_SHOWCASE";
const GET_USER_SHOWCASE = "users/GET_SHOWCASE";
const DELETE_USER = "users/DELETE_USER";
//action creator
const addUserFavAction = (fav) => ({
  type: ADD_USER_FAV,
  fav,
});

const getUserInfoAction = (userInfo) => ({
  type: GET_USER_INFO,
  userInfo,
});

const updateUserInfoAction = (userInfo) => ({
  type: UPDATE_USER_INFO,
  userInfo,
});

const updateUserShowcaseAction = (showcaseUpdate) => ({
  type: UPDATE_USER_SHOWCASE,
  showcaseUpdate,
});

const getUserShowcaseAction = (userShowcase) => ({
  type: GET_USER_SHOWCASE,
  userShowcase,
});

const deleteUserAction = () => ({
  type: DELETE_USER,
});

//thunk creator
export const updateUserShowcaseThunk =
  (userId, showcaseInputs) => async (dispatch) => {
    console.log("in update showcase thunk");
    try {
      const res = await fetch(`/api/images/update/showcase/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(showcaseInputs),
      });
    } catch (err) {
      return err;
    }
  };

export const getUserShowcaseThunk = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/showcase/${userId}`);

    if (res.ok) {
      const userShowcase = await res.json();
      console.log("user Showcase in thunk", userShowcase);
      dispatch(getUserShowcaseAction(userShowcase));
      return userId;
    }
  } catch (err) {
    return err;
  }
};

export const updateUserInfoThunk =
  (userInfo, userId, formType) => async (dispatch) => {
    try {
      const res = await fetch(`/api/users/${userId}/details/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      if (res.ok) {
        dispatch(updateUserInfoAction(userInfo));
      }
    } catch (err) {
      return err;
    }
  };

export const userInfoThunk = (userId) => async (dispatch) => {
  //   console.log("userinfo thunk called", userId);
  try {
    const res = await fetch(`/api/users/${userId}`);
    if (res.ok) {
      //   console.log("userinfo thunk res ok");
      const userInfo = await res.json();
      //   console.log("userInfo in thunk after res", userInfo);
      dispatch(getUserInfoAction(userInfo));
      return userInfo;
    }
  } catch (err) {
    return err;
  }
};

export const userDeleteThunk = (userId) => async (dispatch) => {
  console.log("in delete thunk");
  try {
    const res = await fetch(`/api/users/deleteuser/${userId}`);
    if (res.ok) {
      dispatch(deleteUserAction());
    }
  } catch (err) {
    return err;
  }
};

//reducer function
const initialState = { userFav: {}, userInfo: {}, userShowcase: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      console.log("get user info called");
      const newState = { ...state };
      newState.userInfo = action.userInfo;
      return newState;
    }
    case UPDATE_USER_INFO: {
      const newState = { ...state, userInfo: { ...state.userInfo } };
      newState.userInfo = action.userInfo;
      return newState;
    }
    case GET_USER_SHOWCASE: {
      const newState = { ...state, userShowcase: { ...state.userShowcase } };
      newState.userShowcase = action.userShowcase;
      return newState;
    }
    case DELETE_USER: {
      const newState = {
        ...state,
        userFav: {},
        userInfo: {},
        userShowcase: {},
      };
      newState = newState;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
