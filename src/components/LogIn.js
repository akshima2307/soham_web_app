import { Link } from 'react-router-dom';
import '../css/SohamLogin.css';

import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function LogIn(){
    return(
        <section class="form_container">
        <div class="form_left">
            <form action="" class="form">
                <img src="./img/5-soham.png" alt="" />
                <h1>Welcome to So-Ham</h1>
                <p class="span">Find new ideas to try</p>
                <div class="form_group">
                    <EmailOutlinedIcon className="form_icon" />
                    <input type="text" placeholder="Email Id" />
                </div>
                <div class="form_group">
                    <VpnKeyOutlinedIcon className="form_icon"/>
                    <input type="password" placeholder="Password" />
                </div>
                <div class="form_btns">
                    <div class="checkbox">
                        <input type="checkbox" id="Remember" name="" value="checked" />
                        <label for="Remember">Remember me</label>
                    </div>
                    <div class="logInbtn">
                        <Link to="/homePage">LOGIN</Link>
                    </div>
                </div>
                <div class="form_span">
                    <span>Register now</span>
                    <span>Forget password?</span>
                </div>

                <span class="orSpan">OR</span>

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
        </div>
        <div class="form_right">
            <img src="../img/Soham 100 Images/img_22.jpg" alt="" />
        </div>
    </section>
    )
}