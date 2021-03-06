import React from "react";
import { Route, Switch } from "react-router-dom";
import WorkCategories from "./workCategories.jsx";
import WorkVideos from "./workVideos.jsx";
import VideoContainer from "./videoContainer.jsx";

class WorkWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "categories",
      categories: {
        title: {
          english: "WORK",
          traditional: "作品集",
          simplified: "作品集"
        },
        english: [
          {
            name: "MUSIC VIDEO",
            categoryId: 1,
            videos: [
              { name: "RAP",
                identifier: "RAP",
                img: "",
                link: "https://www.youtube.com/watch?v=2cpe3fI3ing&feature=youtu.be&fbclid=IwAR3KUgwhC9ydCNUYCPH7AuWKgdVpIeqta6M6MCPli87Ci9ACBMZ-F2TVkH8" },
              { name: "K POP",
                identifier: "K-POP",
                status: "coming soon" },
              { name: "BLOSSOM",
                identifier: "BLOSSOM",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/blossom.png",
                link: "http://www.youtube.com/watch?v=ZfWr_dWdT5Q" },
              { name: "BROKEN RECORD",
                identifier: "BROKEN-RECORD",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/brokenRecord.png",
                link: "http://www.youtube.com/watch?v=yOXYhVKJmCk" }
            ]
          },
          {
            name: "COMMERCIAL",
            categoryId: 2,
            videos: [
              { name: "COCA-COLA",
                identifier: "COCA-COLA",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/cocaCola.jpg",
                link: "https://www.youtube.com/watch?v=zVXbi5FG87E&feature=youtu.be&fbclid=IwAR1dyXgJiNe5lNG4wq8XJPOlR3ap6VIWMiq1GAIXFKQ4O19wR30Dcx2BvN4" },
              { name: "ALWAYS",
                identifier: "ALWAYS",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/always.png",
                link: "https://vimeo.com/217466851?fbclid=IwAR1acnLYyLy7XB8VOrsrBlwTtWZg-6e8qs5g_2wheI_ZjeYtdiqjkXUUbGY" },
              { name: "EIGA I",
                identifier: "EIGA-I",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigai.png",
                link: "http://www.youtube.com/watch?v=zqE89RFyrHg" },
              { name: "EIGA II",
                identifier: "EIGA-II",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigaii.png",
                link: "http://www.youtube.com/watch?v=fqR9AfknXrc" }
            ]
          },
          {
            name: "NARRATIVE",
            categoryId: 3,
            videos: [
              { name: "RED BEAN SOUP",
                identifier: "RED-BEAN-SOUP",
                status: "coming soon" },
              { name: "WING CHUN",
                identifier: "WING-CHUN",
                status: "coming soon" }
            ]
          },
          {
            name: "ART/FASHION FILM",
            categoryId: 4,
            videos: [
              { name: "BREATHE",
                identifier: "BREATHE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/breathe.png",
                link: "https://vimeo.com/138398817" },
              {
                name: "SOUND",
                identifier: "SOUND",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Sound.png",
                link: "https://www.youtube.com/watch?v=A0ZMoq23Svs&fbclid=IwAR2__3jFBOWEiYCLfU_G0iywh2UjOHEFhk21Ho9FDrOL_NEeHPMjwOYQMIE"
              },
              {
                name: "TASTE",
                identifier: "TASTE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Taste.png",
                link: "https://www.youtube.com/watch?v=hzuXBn3ZQTU&fbclid=IwAR0B1G6z4RLgSoWgVIfS5RY-ZJ57N7y_nyJmDN1qQ8ArVtJ0wetrmP2sCzU"
              },
              {
                name: "TOUCH",
                identifier: "TOUCH",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Touch.png",
                link: "https://www.youtube.com/watch?v=hnXR9Q7luB4&fbclid=IwAR2Ngj_ayvcgOhBEgUsLA0qidONqj0SZaDSNJNA4jLdVyWzyxGN-xGz0-x8"
              }
            ]
          }
        ],
        traditional: [
          {
            name: "音樂短片",
            categoryId: 1,
            videos: [
              { name: "RAP",
                identifier: "RAP",
                img: "",
                link: "https://www.youtube.com/watch?v=2cpe3fI3ing&feature=youtu.be&fbclid=IwAR3KUgwhC9ydCNUYCPH7AuWKgdVpIeqta6M6MCPli87Ci9ACBMZ-F2TVkH8" },
              { name: "K POP",
                identifier: "K-POP",
                status: "coming soon" },
              { name: "初開",
                identifier: "BLOSSOM",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/blossom.png",
                link: "http://www.youtube.com/watch?v=ZfWr_dWdT5Q" },
              { name: "BROKEN RECORD",
                identifier: "BROKEN-RECORD",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/brokenRecord.png",
                link: "http://www.youtube.com/watch?v=yOXYhVKJmCk" }
            ]
          },
          {
            name: "廣告",
            categoryId: 2,
            videos: [
              { name: "可口可樂",
                identifier: "COCA-COLA",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/cocaCola.jpg",
                link: "https://www.youtube.com/watch?v=zVXbi5FG87E&feature=youtu.be&fbclid=IwAR1dyXgJiNe5lNG4wq8XJPOlR3ap6VIWMiq1GAIXFKQ4O19wR30Dcx2BvN4" },
              { name: "護舒寶",
                identifier: "ALWAYS",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/always.png",
                link: "https://vimeo.com/217466851?fbclid=IwAR1acnLYyLy7XB8VOrsrBlwTtWZg-6e8qs5g_2wheI_ZjeYtdiqjkXUUbGY" },
              { name: "EIGA I",
                identifier: "EIGA-I",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigai.png",
                link: "http://www.youtube.com/watch?v=zqE89RFyrHg" },
              { name: "EIGA II",
                identifier: "EIGA-II",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigaii.png",
                link: "http://www.youtube.com/watch?v=fqR9AfknXrc" }
            ]
          },
          {
            name: "劇情片",
            categoryId: 3,
            videos: [
              { name: "紅豆湯",
                identifier: "RED-BEAN-SOUP",
                status: "coming soon" },
              { name: "詠春",
                identifier: "WING-CHUN",
                status: "coming soon" }
            ]
          },
          {
            name: "藝術片",
            categoryId: 4,
            videos: [
              { name: "BREATHE",
                identifier: "BREATHE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/breathe.png",
                link: "https://vimeo.com/138398817" },
              {
                name: "SOUND",
                identifier: "SOUND",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Sound.png",
                link: "https://www.youtube.com/watch?v=A0ZMoq23Svs&fbclid=IwAR2__3jFBOWEiYCLfU_G0iywh2UjOHEFhk21Ho9FDrOL_NEeHPMjwOYQMIE"
              },
              {
                name: "TASTE",
                identifier: "TASTE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Taste.png",
                link: "https://www.youtube.com/watch?v=hzuXBn3ZQTU&fbclid=IwAR0B1G6z4RLgSoWgVIfS5RY-ZJ57N7y_nyJmDN1qQ8ArVtJ0wetrmP2sCzU"
              },
              {
                name: "TOUCH",
                identifier: "TOUCH",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Touch.png",
                link: "https://www.youtube.com/watch?v=hnXR9Q7luB4&fbclid=IwAR2Ngj_ayvcgOhBEgUsLA0qidONqj0SZaDSNJNA4jLdVyWzyxGN-xGz0-x8"
              }
            ]
          }
        ],
        simplified: [
          {
            name: "音乐短片",
            categoryId: 1,
            videos: [
              { name: "RAP",
                identifier: "RAP",
                img: "",
                link: "https://www.youtube.com/watch?v=2cpe3fI3ing&feature=youtu.be&fbclid=IwAR3KUgwhC9ydCNUYCPH7AuWKgdVpIeqta6M6MCPli87Ci9ACBMZ-F2TVkH8" },
              { name: "K POP",
                identifier: "K-POP",
                status: "coming soon" },
              { name: "初开",
                identifier: "BLOSSOM",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/blossom.png",
                link: "http://www.youtube.com/watch?v=ZfWr_dWdT5Q" },
              { name: "BROKEN RECORD",
                identifier: "BROKEN-RECORD",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/brokenRecord.png",
                link: "http://www.youtube.com/watch?v=yOXYhVKJmCk" }
            ]
          },
          {
            name: "广告",
            categoryId: 2,
            videos: [
              { name: "可口可乐",
                identifier: "COCA-COLA",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/cocaCola.jpg",
                link: "https://www.youtube.com/watch?v=zVXbi5FG87E&feature=youtu.be&fbclid=IwAR1dyXgJiNe5lNG4wq8XJPOlR3ap6VIWMiq1GAIXFKQ4O19wR30Dcx2BvN4" },
              { name: "护舒宝",
                identifier: "ALWAYS",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/always.png",
                link: "https://vimeo.com/217466851?fbclid=IwAR1acnLYyLy7XB8VOrsrBlwTtWZg-6e8qs5g_2wheI_ZjeYtdiqjkXUUbGY" },
              { name: "EIGA I",
                identifier: "EIGA-I",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigai.png",
                link: "http://www.youtube.com/watch?v=zqE89RFyrHg" },
              { name: "EIGA II",
                identifier: "EIGA-II",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/eigaii.png",
                link: "http://www.youtube.com/watch?v=fqR9AfknXrc" }
            ]
          },
          {
            name: "剧情片",
            categoryId: 3,
            videos: [
              { name: "红豆汤",
                identifier: "RED-BEAN-SOUP",
                status: "coming soon" },
              { name: "咏春",
                identifier: "WING-CHUN",
                status: "coming soon" }
            ]
          },
          {
            name: "艺术片",
            categoryId: 4,
            videos: [
              { name: "BREATHE",
                identifier: "BREATHE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/breathe.png",
                link: "https://vimeo.com/138398817" },
              {
                name: "SOUND",
                identifier: "SOUND",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Sound.png",
                link: "https://www.youtube.com/watch?v=A0ZMoq23Svs&fbclid=IwAR2__3jFBOWEiYCLfU_G0iywh2UjOHEFhk21Ho9FDrOL_NEeHPMjwOYQMIE"
              },
              {
                name: "TASTE",
                identifier: "TASTE",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Taste.png",
                link: "https://www.youtube.com/watch?v=hzuXBn3ZQTU&fbclid=IwAR0B1G6z4RLgSoWgVIfS5RY-ZJ57N7y_nyJmDN1qQ8ArVtJ0wetrmP2sCzU"
              },
              {
                name: "TOUCH",
                identifier: "TOUCH",
                img: "https://s3.amazonaws.com/art-avenue-productions/work/Touch.png",
                link: "https://www.youtube.com/watch?v=hnXR9Q7luB4&fbclid=IwAR2Ngj_ayvcgOhBEgUsLA0qidONqj0SZaDSNJNA4jLdVyWzyxGN-xGz0-x8"
              }
            ]
          }
        ]
      },
      routes: ["musicVideo", "commercial", "narrative", "artFashionFilm"]
    }
  }

  pickCategory(category) {
    this.setState({
      videos: category.videos,
      status: category.name
    })
  }

  render() {
    const { language, isMobile } = this.props;
    const { status, categories, videos, routes } = this.state;
    const context = categories[language];
    if (isMobile) {
      return (
        <div className="mobile-categories-canvas">
          <Switch>
            <Route path="/work" exact render={(props) =><WorkCategories {...props} categories={categories} language={language} isMobile={isMobile} />}/>
            <Route path="/work/musicVideo" exact render={(props) => <WorkVideos {...props} context={context[0]} route={routes[0]} isMobile={isMobile} />} />
            <Route path="/work/musicVideo/RAP" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[0]} isMobile={isMobile} />} />
            <Route path="/work/musicVideo/BLOSSOM" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[2]} isMobile={isMobile} />} />
            <Route path="/work/musicVideo/BROKEN-RECORD" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[3]} isMobile={isMobile} />} />
            <Route path="/work/commercial" exact render={(props) => <WorkVideos {...props} context={context[1]} route={routes[1]} isMobile={isMobile} />} />
            <Route path="/work/commercial/COCA-COLA" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[0]} isMobile={isMobile} />} />
            <Route path="/work/commercial/ALWAYS" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[1]} isMobile={isMobile} />} />
            <Route path="/work/commercial/EIGA-I" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[2]} isMobile={isMobile} />} />
            <Route path="/work/commercial/EIGA-II" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[3]} isMobile={isMobile} />} />
            <Route path="/work/narrative" exact render={(props) => <WorkVideos {...props} context={context[2]} route={routes[2]} isMobile={isMobile} />} />
            <Route path="/work/artFashionFilm" exact render={(props) => <WorkVideos {...props} context={context[3]} route={routes[3]} isMobile={isMobile} />} />
            <Route path="/work/artFashionFilm/BREATHE" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[0]} isMobile={isMobile} />} />
            <Route path="/work/artFashionFilm/SOUND" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[1]} isMobile={isMobile} />} />
            <Route path="/work/artFashionFilm/TASTE" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[2]} isMobile={isMobile} />} />
            <Route path="/work/artFashionFilm/TOUCH" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[3]} isMobile={isMobile} />} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="categories-canvas">
          <Switch>
            <Route path="/work" exact render={(props) =><WorkCategories {...props} categories={categories} language={language}/>}/>
            <Route path="/work/musicVideo" exact render={(props) => <WorkVideos {...props} context={context[0]} route={routes[0]} />} />
            <Route path="/work/musicVideo/RAP" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[0]} />} />
            <Route path="/work/musicVideo/BLOSSOM" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[2]} />} />
            <Route path="/work/musicVideo/BROKEN-RECORD" exact render={(props) => <VideoContainer {...props} route={routes[0]} context={context[0].videos[3]} />} />
            <Route path="/work/commercial" exact render={(props) => <WorkVideos {...props} context={context[1]} route={routes[1]} />} />
            <Route path="/work/commercial/COCA-COLA" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[0]} />} />
            <Route path="/work/commercial/ALWAYS" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[1]} />} />
            <Route path="/work/commercial/EIGA-I" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[2]} />} />
            <Route path="/work/commercial/EIGA-II" exact render={(props) => <VideoContainer {...props} route={routes[1]} context={context[1].videos[3]} />} />
            <Route path="/work/narrative" exact render={(props) => <WorkVideos {...props} context={context[2]} route={routes[2]} />} />
            <Route path="/work/artFashionFilm" exact render={(props) => <WorkVideos {...props} context={context[3]} route={routes[3]} />} />
            <Route path="/work/artFashionFilm/BREATHE" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[0]} />} />
            <Route path="/work/artFashionFilm/SOUND" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[1]} />} />
            <Route path="/work/artFashionFilm/TASTE" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[2]} />} />
            <Route path="/work/artFashionFilm/TOUCH" exact render={(props) => <VideoContainer {...props} route={routes[3]} context={context[3].videos[3]} />} />
          </Switch>
        </div>
      )
    }
  }
}

export default WorkWindow;