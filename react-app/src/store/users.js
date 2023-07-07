
//type string

const ADD_USER_FAV = 'users/ADD_USER_FAV';



//action creator
const addUserFavAction = (fav) => ({
    type: ADD_USER_FAV,
    fav
});


//thunk creator
export const userFavThunk = (fav) => async (dispatch) => {
    console.log("In the adduserFav thunk!!!!")
    try {
        console.log("request body: ", JSON.stringify(fav))
        const res = fetch('/api/images/user_favorite', {
            
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fav),
            
        });

        console.log("after res !!!!!!!!!", res)

        if (res.ok) {
            
            const userFav = await res.json();
            console.log("res in the add user fav!!!", res)
            dispatch(addUserFavAction(userFav));
            return userFav;
        }
    } catch (err) {
        const errors = err.json();
        return errors;
    }
};


//reducer function
const initialState = {userFav: {}};

const userFavReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER_FAV: {
            const newState = {...state};
            newState.userFav = action.fav;
            return newState;
        }
        default:
            return state;
    }
};

export default userFavReducer;