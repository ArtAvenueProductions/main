import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

const HomeLogo = (props) => {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <div className="home-logo nav-button">
        <h2 className="logo-aa">ART AVENUE</h2>
        <h2 className="logo-p">PRODUCTIONS</h2>
      </div>
    </NavLink>
  )
}

export default HomeLogo;