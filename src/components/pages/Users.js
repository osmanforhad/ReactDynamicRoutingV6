import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ router }) => {
    return (
      <>
      <h4 className="text-center">This is Users Page</h4>
        <h2>List of Users</h2>
  
        <ul>
          {router.map((route, index) => (
            <li key={index}>
              <Link to={`dashboard/${route.path}`}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };

export default Users;
