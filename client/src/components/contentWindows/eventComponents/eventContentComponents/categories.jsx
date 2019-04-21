import React from "react";

class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  selectSection(e) {
    // console.log(e.title);
  }

  render() {
    const { eventInfo, selectEvent } = this.props;
    const content = eventInfo.content;
    return (
      <div className="event-body-categories">
        {content.map((section, idx) => {
          return <h3 key={`${section.title} ${idx}`} onClick={() => selectEvent(section)} className="event-body-category">{section.title}</h3>
        })}
      </div>
    )
  }
}

export default Categories;