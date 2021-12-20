import React from 'react';
import { Outlet} from 'react-router-dom';
import Navigation from './Navigation';

const NavLayouts = () => {
  
    return (
      <>
        <h4 className="text-center mt-3">Dynamic Routing React Router Version6</h4>
  
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
              <Navigation />
      
        </nav>
  
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </>
    );
  };

export default NavLayouts;
