import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};

export const loginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
