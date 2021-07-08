import React from "react";

import '../css/userProfile.css';

class UserProfile extends React.Component {
  render() {
    return (
      <section class="user_profile" id="userProfile">
        <div class="user_profile_bg">
          <img src="../img/homeBg.png" alt="" />
        </div>
        <div class="user_profile-detials">
          <img class="user_profile-img" src="../img/user-4.jpg" alt="" />
          <h4 class="user_profile-name">Sergii Miloskiy</h4>
          <p class="user_profile-about">
            I am designer and front-end developer. Use my knowledge for creating
            good interfaces thus providing a good user experience.
          </p>
          <div class="user_profile-status">
            <a href="#popup">
              <strong>250</strong>
              <span>
                <i class="fa fa-user-o" aria-hidden="true"></i>Followers
              </span>
            </a>
            <a href="#popup">
              <strong>30</strong>
              <span>
                <i class="fa fa-user-o" aria-hidden="true"></i>Following
              </span>
            </a>
            <a href="">
              <strong>10</strong>
              <span>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Media Views
              </span>
            </a>
            <a href="">
              <strong>100</strong>
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>Total Likes
              </span>
            </a>
          </div>
          <div class="user_profile-socialMedia">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </div>
          <div class="user_profile-contactInfo">
            <span>
              <i class="fa fa-envelope" aria-hidden="true"></i>xyz123@gmail.com
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default UserProfile;
