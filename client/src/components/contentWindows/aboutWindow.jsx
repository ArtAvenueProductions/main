import React from "react";

class AboutWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          img: "https://s3.amazonaws.com/art-avenue-productions/photo.jpg",
          name: "Katusha Jin",
          role: "CEO | DIRECTOR | PRODUCER",
          description: "Katusha is both a painter and a filmmaker. She was born in the UK, and has lived in various cities including Beijing, Moscow, Hong Kong, and New York. Growing up in a multi-cultural environment has cultivated her interest in collaborations between artists of various backgrounds. A combination of curiosity and need led Katusha to co-found \"Art Avenue\", a place where artists can come together and share their cultural experiences. She is currently working on a Spring 2019 Exhibition, and hopes that together, we can spread knowledge through art."
        },
        {
          img: "https://s3.amazonaws.com/art-avenue-productions/photo.jpg",
          name: "Kadi Tsang",
          role: "CFO | DIRECTOR | PRODUCER",
          description: "Kadi is a trilingual artist passionate with a mix of Arts and Science background, and a strong understanding towards the global development and conflicts of human nature. From producing to directing, to sound mixing, she has been in various departments and understands the art and beauty of each. Being open-minded and taking initiative on each of her projects, she devotes herself to creating a whole new world that would draw both herself and the audience in. She hopes to help spread culture and allow both the audience and herself to learn from one another."
        }
      ]
    }
  }

  render() {
    return (
      <div className="profile-window">
        {this.state.profiles.map((person) => {
          return (
            <div className="profile-div" key={person.role.split(' ')[0]}>
              <img src={person.img} />
              <p>{person.name}</p>
              <p>{person.role}</p>
              <p>{person.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default AboutWindow;