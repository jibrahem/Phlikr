//type string

const ADD_USER_FAV = "users/ADD_USER_FAV";
const GET_USER_INFO = "users/GET_USER_INFO";
const UPDATE_USER_INFO = "users/UPDATE_USER_INFO";

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

//thunk creator
export const updateUserInfoThunk =
  (userInfo, userId, formType) => async (dispatch) => {
    try {
      const res = await fetch(`/api/users/${userId}/details/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });
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

export const userFavThunk = (fav) => async (dispatch) => {
  console.log("In the adduserFav thunk!!!!");
  try {
    console.log("request body: ", JSON.stringify(fav));
    const res = fetch("/api/images/user_favorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fav),
    });

    console.log("after res !!!!!!!!!", res);

    if (res.ok) {
      const userFav = await res.json();
      console.log("res in the add user fav!!!", res);
      dispatch(addUserFavAction(userFav));
      return userFav;
    }
  } catch (err) {
    const errors = err.json();
    return errors;
  }
};

//reducer function
const initialState = { userFav: {}, userInfo: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_FAV: {
      const newState = { ...state };
      newState.userFav = action.fav;
      return newState;
    }
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
    default:
      return state;
  }
};

export default userReducer;
