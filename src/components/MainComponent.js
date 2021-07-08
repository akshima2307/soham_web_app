import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Posts from "./Posts";
import About from "./About";
import Theme from "./Theme";
import Blog from "./Blog";
import MuseumCorner from "./MuseumCorner";
import Contact from "./Contact";
import Events from "./Events";
import Exhibitions from "./Exhibitions";
import PostDetails from "./PostDetails";
import UserProfile from "./UserProfile";

import { POSTS } from "../shared/posts";
import { BLOGS } from "../shared/blog";
import { MUSEUMCORNER } from "../shared/museumCorner";
import { COMMENTS } from "../shared/comments";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: POSTS,
      comments: COMMENTS,
      blogs: BLOGS,
      museums: MUSEUMCORNER,
    };
  }

  componentDidMount(){
    var height = document.getElementById("navBar").offsetTop;
    console.log(height);
    window.onscroll = function () {
      if (window.pageYOffset > height) {
        document.getElementById("navBar").classList.add("fixed");
        [...document.querySelectorAll(".nav_link")].map(function (el) {
          el.style.color = "white";
        });
      } else {
        document.getElementById("navBar").classList.remove("fixed");
        [...document.querySelectorAll(".nav_link")].map(function (el) {
          el.style.color = "#3d3d3d";
        });
      }
    };
  }

  render() {
    
    const PostWithId = ({ match }) => {
      return (
        <PostDetails
          post={
            this.state.posts.filter(
              (post) => post.id === parseInt(match.params.postId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.postId === parseInt(match.params.postId, 10)
          )}
        />
      );
    };
    return (
      <>
        <NavBar />
        <Switch>
            <Route exact  path="/homePage/posts">
                <Posts posts={this.state.posts} />
            </Route>
            <Route exact path="/homePage/posts/:postId" component={PostWithId} />
            <Route exact path="/homePage/about">
                <About />
            </Route>
            <Route exact path="/homePage/themeOfTheMonth">
                <Theme />
            </Route>
            <Route exact path="/homePage/blog">
                <Blog blogs={this.state.blogs} />
            </Route>
            <Route exact path="/homePage/museumCorner">
                <MuseumCorner museums={this.state.museums} />
            </Route>
            <Route exact path="/homePage/contact">
                <Contact />
            </Route>
            <Route exact path="/homePage/events">
                <Events />
            </Route>
            <Route exact path="/homePage/exhibitions">
                <Exhibitions />
            </Route>
            <Route exact path="/homePage/userProfile">
              <UserProfile />
            </Route>
            <Redirect to="/homePage/posts">
                <Posts posts={this.state.posts} />
            </Redirect>
        </Switch>
      </>
    );
  }
}

export default MainComponent;
