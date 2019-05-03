import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

const HomeLogo = (props) => {
  if (props.isMobile) {
    return (
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div>
          <img className="mobile-home-logo-img" src="https://s3.amazonaws.com/art-avenue-productions/ArtAveBBGT.png"/>
        </div>
      </NavLink>
    )
  } else {
    return (
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div className="home-logo">
          <img className="home-logo-img" src="https://s3.amazonaws.com/art-avenue-productions/ArtAveBBGT.png"/>
        </div>
      </NavLink>
    )
  }
        // <h2 className="logo-aa">ART AVENUE</h2>
        // <h2 className="logo-p">PRODUCTIONS</h2>
}

export default HomeLogo;