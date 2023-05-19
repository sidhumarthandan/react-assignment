import React from 'react';

const Table = ({ user }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.email}</td>
          <td>{user.name}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
