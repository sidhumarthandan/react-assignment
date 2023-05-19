import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Home Page</h2>
      <Table user={user} />
    </div>
  );
};

export default HomePage;
