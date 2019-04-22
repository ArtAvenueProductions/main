import React from "react";
import Categories from "./eventContentComponents/categories.jsx";
import Content from "./eventContentComponents/content.jsx";

class EventBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "General",
      content: this.props.eventInfo
    }

    this.renderContent = this.renderContent.bind(this);
    this.selectContent = this.selectContent.bind(this);
  }

  selectContent(content) {
    const title = content.title;
    if (title === "General") {
      content = this.props.eventInfo;
    }
    this.setState({
      title,
      content
    });
  }

  renderContent(section) {
    return (<Content displayInfo={section} />);
  }

  render() {
    const { eventInfo } = this.props;
    const { content } = this.state;
    const artists = eventInfo.content[4].members;
    const team = eventInfo.content[3].members;
    const address = eventInfo.address;
    const addressString = `${address.street}, ${address.city}, ${address.state} ${address.zipcode}`;
    return (
      <div className="event-body-div">
        <Categories eventInfo={eventInfo} selectEvent={this.selectContent} />
        {this.renderContent(content)}
        <div>
          <div>
            <p>Location: <a href={address.url} target="_blank">{address.location}</a></p>
            <p>{addressString}</p>
          </div>
          <div>
            <p className="event-body-artists-title">FEATURED ARTISTS</p>
            {artists.map((artist, idx) => {
              return (<p key={`${idx} artist`}>{artist.name}</p>);
            })}
          </div>
          <div>
            <p className="event-body-artists-title">TEAM</p>
            {team.map((member, idx) => {
              return (<p key={`${idx} member`}>{member.name}</p>);
            })}
          </div>
        </div>
      </div>
    )
  }
        // {contentDiv}
}

export default EventBody;