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
    const { categories, language } = this.props;
    const context = categories[language];
    return (
      <div className="categories-box">
        {
          context.map((category, i) => {
            return (
              <NavLink to={`/work/${this.camelCategory(categories.english[i].name)}`} style={{ textDecoration: 'none' }} className="category-grid">
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

export default WorkCategories;