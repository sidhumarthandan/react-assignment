import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER:
      // Add logic for login validation against stored data
      const { email, password } = action.payload;
      if (state.user && state.user.email === email && state.user.password === password) {
        return {
          ...state,
          isLoggedIn: true,
        };
      }
      return state;
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
