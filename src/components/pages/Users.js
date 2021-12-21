import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = ({ router }) => {
  
  return (
    <>
      <h2>Users List:</h2>

      <ul>
        {router.map((route) => (
          <li key={route.path}>
            <Link to={route.name}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Users;
