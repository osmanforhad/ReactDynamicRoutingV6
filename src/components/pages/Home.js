import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 className="text-center">This is Home Page</h1>
           <p className="text-center">
           <NavLink to="/users/superAdmin">Super Admin</NavLink>
           <br/>
               <NavLink to="/users/cusotmer">customer</NavLink>
           </p>
        </div>
    )
}

export default Home;
