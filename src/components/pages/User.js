import React from 'react';
import {useParams, Link} from 'react-router-dom';
// import router from '../routes/router';

  const User = () => {
    const { params } = useParams();
  
    return (
      <>
        <h2>The User is: 
          <b> {params} </b>
          <br/>
         Based on URL</h2>

        {/* <ul>
        {router.map((route) => (
          <li key={route.path}>
            <Link to={route.name}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul> */}
  
        <Link to="/users">Back to Users</Link>
      </>
    );
  };

export default User;
