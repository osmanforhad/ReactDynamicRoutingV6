import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import NavLayouts from './components/layout/NavLayouts';
import Nomatch from './components/errors/404Nomatch';
const App = () => {

  return (
   <Router>
      <Routes>
      <Route element={<NavLayouts />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users/*" element={<Users />}>
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Route>
    </Routes>
   </Router>
  );
};

export default App;