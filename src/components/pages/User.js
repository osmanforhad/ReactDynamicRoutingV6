import React from 'react';
import {useParams, Link} from 'react-router-dom';

  const User = () => {
    const { params } = useParams();
  
    return (
      <>
        <h2>The User is: {params}</h2>
  
        <Link to="/users">Back to Users</Link>
      </>
    );
  };

export default User;
