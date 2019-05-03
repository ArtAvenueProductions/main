import React from 'react';
import ReactDom from 'react-dom';

const LangSelect = (props) => {

  const { languageChange } = props;
  return (
    <div className="lang-select">
      <div className="eng-div lang-div" onClick={() => languageChange("english")}>EN</div>
      <div className="lang-div" onClick={() => languageChange("traditional")}>繁</div>
      <div className="lang-div" onClick={() => languageChange("simplified")}>简</div>
    </div>
  )
}

export default LangSelect;