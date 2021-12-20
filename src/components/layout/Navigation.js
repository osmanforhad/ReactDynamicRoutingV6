import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {

  //__stle for navmenu__//
  const styles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

    return (
        <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <ul>
        <li><NavLink to="/" style={styles}>Home</NavLink></li>
        <li><NavLink to="/users" style={styles}>Users</NavLink></li>
        </ul>
      </nav>
    )
}

export default Navigation;
