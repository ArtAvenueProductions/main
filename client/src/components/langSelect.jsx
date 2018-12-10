import React from 'react';
import ReactDom from 'react-dom';

const LangSelect = (props) => {
  return (
    <div className="lang-select">
      <div className="eng-div lang-div" onClick={() => props.languageChange("english")}>EN</div>
      <div className="lang-div" onClick={() => props.languageChange("traditional")}>繁</div>
      <div className="lang-div" onClick={() => props.languageChange("simplified")}>简</div>
    </div>
  )
}

export default LangSelect;