import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './User';

const Users = () => {
  
  return (
    <>
    <h4 className="text-center">This is User Page</h4>
      <Routes>
      <Route path=":params" element={ <User />} />
      </Routes>
    </>
  );
};

export default Users;
