import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

const LogoutButton = ({ history }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
