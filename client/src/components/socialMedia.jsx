import React from "react";

const SocialMedia = () => {
  return (
    <div className="logos-div">
      <a href="https://www.facebook.com/artavenue.global/" target="_blank">
        <img src="https://s3.amazonaws.com/art-avenue-productions/icons/fb.webp" className="social-logos"/>
      </a>
      <a href="https://www.instagram.com/artavenue.global/" target="_blank">
        <img src="https://s3.amazonaws.com/art-avenue-productions/icons/ig.webp" className="social-logos"/>
      </a>
      <a href="https://www.linkedin.com/company/art-avenue-productions/" target="_blank">
        <img src="https://s3.amazonaws.com/art-avenue-productions/icons/in.webp" className="social-logos"/>
      </a>
      <img src="https://s3.amazonaws.com/art-avenue-productions/icons/yt.webp" className="social-logos"/>
    </div>
  )
}

export default SocialMedia;