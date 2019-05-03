import React from 'react';
import { NavLink } from 'react-router-dom';

class WorkCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  camelCategory(str) {
    const words = str.toLowerCase().split(' ').join('/').split('/');
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }

  render() {
    const { categories, language, isMobile } = this.props;
    const context = categories[language];
    const title = categories.title[language];
    if (isMobile) {
      return (
        <div className="mobile-categories-box">
          <p className="mobile-categories-box-title">{title}</p>
          {
            context.map((category, i) => {
              return (
                <NavLink to={`/work/${this.camelCategory(categories.english[i].name)}`} style={{ textDecoration: 'none' }} className="mobile-category-grid" key={i}>
                  <div key={i}>
                    <p>{category.name}</p>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className="categories-box">
          {
            context.map((category, i) => {
              return (
                <NavLink to={`/work/${this.camelCategory(categories.english[i].name)}`} style={{ textDecoration: 'none' }} className="category-grid" key={i}>
                  <div key={i}>
                    <p>{category.name}</p>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      )
    }
  }
}

export default WorkCategories;