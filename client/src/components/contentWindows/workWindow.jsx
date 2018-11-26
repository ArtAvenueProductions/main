import React from "react";

class WorkWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "MUSIC VIDEO",
        }, {
          name: "COMMERCIAL",
        }, {
          name: "NARRATIVE",
        }, {
          name: "ART/FASHION FILM",
        }
      ]
    }
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories-canvas">
        <div className="categories-box">
          {
            categories.map((category, i) => {
              return (<div key={i} className="category-grid">
                <p>{category.name}</p>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}

export default WorkWindow;