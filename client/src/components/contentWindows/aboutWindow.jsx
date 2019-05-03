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
            description: "Katusha Jin is a New York based director, writer, and producer from the U.K. Although primarily known for her film work, she has also worked in the theatre and editorial scenes. Katusha grew up in a trilingual and multicultural environment, which cultivated her interest in collaborations between artists of diverse backgrounds. In her spare time, she participates in art exhibitions, produces music, and conducts research on the effects of cultural identity, parenting, and education on mental health."
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
            description: "Kadi Tsang is a trilingual writer, director and producer based in New York. She has worked on various live shows, film productions and art events, with experience working in different departments.  Her interests includes global development, cultural conflicts and mental well-being, and she aims to help raise awareness on social issues and facilitate cultural exchange through her work."
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
    const { language, isMobile } = this.props;
    const { profiles } = this.state;
    const title = {
      english: "ABOUT",
      traditional: "關於我們",
      simplified: "关于我们"
    }
    const context = profiles.map((profile) => {
      return profile[language];
    });

    if (isMobile) {
      return (
        <div className="mobile-profile-window">
          <h1>{title[language]}</h1>
          <div className="mobile-whowe">
            <h2 className="mobile-whowe-title">WHO WE ARE</h2>
            <p>We are artists who aim to create social impact and invite change through art.</p>
          </div>
          <div className="mobile-whowe">
            <h2 className="mobile-whowe-title">WHAT WE DO</h2>
            <p>We Direct, Produce, and Write.</p>
          </div>
          {context.map((person) => {
            return (
              <div className="mobile-profile-div" key={person.name}>
                <img src={person.img} />
                <p>{person.name}</p>
                <p>{person.role}</p>
                <p>{person.description}</p>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="profile-window-div">
          <div>
            <h2>WHO WE ARE</h2>
            <p>We are artists who aim to create social impact and invite change through art.</p>
          </div>
          <div>
            <h2>WHAT WE DO</h2>
            <p>We Direct, Produce, and Write.</p>
          </div>
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
        </div>
      )
    }
  }
}

export default AboutWindow;