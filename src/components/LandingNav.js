import { Link } from 'react-router-dom';
function LandingNav(){
    return(
        <header>
            <div class="header_div">
                <img class="header_img header_img-1" src="./img/5-soham.png" alt="so-ham logo" />
                <img class="header_img header_img-2" src="./img/MOC Final LOGO (1).png" alt="MOC logo" />
                <img class="header_img header_img-3" src="./img/4-NGMA - 1.png" alt="NGMA logo" />
            </div>
            <div class="header_div">
                <h3>Soham</h3>
            </div>
            <nav>
                <ul>
                <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div class="buttons">
                <Link to="/logIn" class="login" >Log in</Link>
                <Link class="btn btn_1 signup" href="#form">Sign up</Link>
                </div>
            </nav>
        </header>
    );
};

export default LandingNav;
