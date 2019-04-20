import React from "react";

class AboutWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          english: {
            img: "https://s3.amazonaws.com/art-avenue-productions/katusha_pic.jpg",
            name: "Katusha Jin",
            role: "CO-FOUNDER",
            description: "Katusha is both a painter and a filmmaker. She was born in the UK, and has lived in various cities including Beijing, Moscow, Hong Kong, and New York. Growing up in a multi-cultural environment has cultivated her interest in collaborations between artists of various backgrounds. A combination of curiosity and need led Katusha to co-found \"Art Avenue\", a place where artists can come together and share their cultural experiences. She is currently working on a Spring 2019 Exhibition, and hopes that together, we can spread knowledge through art."
          },
          traditional: {
            img: "https://s3.amazonaws.com/art-avenue-productions/katusha_pic.jpg",
            name: "金珍",
            role: "聯合創始人",
            description: "金珍是位來至美國的電影製作人、編劇、畫家和作曲家。她畢業於紐約大學的電影系，也曾經在伯明翰（英國），莫斯科，北京和香港工作。她的多元背景令她的故事變得豐富，也讓她更勇於分享自己的想法。她的短片和音樂影片曾在比賽中獲獎，而現在她專注在導演方面，也在準備自己的首個展覽。"
          },
          simplified: {
            img: "https://s3.amazonaws.com/art-avenue-productions/katusha_pic.jpg",
            name: "金珍",
            role: "联合创始人",
            description: "金珍是位来至美国的电影制作人、编剧、画家和作曲家。她毕业于纽约大学的电影系，也曾经在伯明翰（英国），莫斯科，北京和香港工作。她的多元背景令她的故事变得丰富，也让她更勇于分享自己的想法。她的短片和音乐影片曾在比赛中获奖，而现在她专注在导演方面，也在准备自己的首个展览。"
          }
        },
        {
          english: {
            img: "https://s3.amazonaws.com/art-avenue-productions/kadi_pic.jpg",
            name: "Kadi Tsang",
            role: "CO-FOUNDER",
            description: "Kadi is a trilingual artist passionate with a mix of Arts and Science background, and a strong understanding towards the global development and conflicts of human nature. From producing to directing, to sound mixing, she has been in various departments and understands the art and beauty of each. Being open-minded and taking initiative on each of her projects, she devotes herself to creating a whole new world that would draw both herself and the audience in. She hopes to help spread culture and allow both the audience and herself to learn from one another."
          },
          traditional: {
            img: "https://s3.amazonaws.com/art-avenue-productions/kadi_pic.jpg",
            name: "曾婉瑩",
            role: "聯合創始人",
            description: "曾婉瑩熱衷於探索全球發展以及人性的本質，她的三語背景不僅能使她更好的完成工作，更給予了她多元的視點。她為多部學生電影、電視劇集、廣告和MV擔任了制片、導演、錄音等角色，在各個部門工作的經歷使她意識到電影是合作的藝術，每個部門都至關重要。她總一馬當先，也樂於聽到更多的意見。她希望她能創造出一個能讓觀眾沉浸其中的影畫世界，彼此可以學習各種的文化。"
          },
          simplified: {
            img: "https://s3.amazonaws.com/art-avenue-productions/kadi_pic.jpg",
            name: "曾婉莹",
            role: "联合创始人",
            description: "曾婉莹热衷于探索全球发展以及人性的本质，她的三语背景不仅能使她更好的完成工作，更给予了她多元的视点。她为多部学生电影、电视剧集、广告和MV担任了制片、导演、录音等角色，在各个部门工作的经历使她意识到电影是合作的艺术，每个部门都至关重要。她总一马当先，也乐于听到更多的意见。她希望她能创造出一个能让观众沉浸其中的影画世界，彼此可以学习各种的文化。"
          }
        }
      ]
    }
  }
  render() {
    const { language } = this.props;
    const { profiles } = this.state;
    const context = profiles.map((profile) => {
      return profile[language];
    })
    return (
      <div className="profile-window">
        {context.map((person) => {
          return (
            <div className="profile-div" key={person.name}>
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