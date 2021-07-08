import React from 'react';

// Icons
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class SignUp extends React.Component{
    render(){
        return(
        <form action="" className="signUpForm">
            <img src="./img/5-soham.png" alt="" />
            <h2>Welcome to Soham</h2>
            <p>Find new ideas to try</p>
            <div className="form_group">
              <AccountCircleOutlinedIcon className="form_icon" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form_group">
              <AccountCircleOutlinedIcon className="form_icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="form_group">
              <EmailOutlinedIcon className="form_icon" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="form_group">
              <VpnKeyOutlinedIcon className="form_icon" />
              <input type="password" placeholder="Password" />
            </div>
            <a className="form_btn" >CONTINUE</a>
            <span className="orSpan">OR</span>
      
            <div class="social_form_group" style={{backgroundColor: 'rgb(66, 103, 178)'}}>
                    <FacebookIcon className="social_form_group-icon" style={{backgroundColor: 'rgba(66, 103, 178,0.5)'}}/>
                    <span>LOGIN WITH FACEBOOK</span>
                </div>
                <div class="social_form_group" style={{backgroundColor:'rgb(0, 172, 238)'}}>
                    <TwitterIcon className="social_form_group-icon" style={{backgroundColor: 'rgba(0, 172, 238,0.5)'}}/>
                    <span>LOGIN WITH TWITTER</span>
                </div>
                <div class="social_form_group" style={{backgroundColor: 'rgb(219, 68, 55)'}}>
                    <MailOutlineIcon className="social_form_group-icon" style={{backgroundColor: 'rgba(219, 68, 55,0.5)'}}/>
                    <span>LOGIN WITH GOOGLE</span>
                </div>
        </form>
        )
    }
};

export default SignUp;
