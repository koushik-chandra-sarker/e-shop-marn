import logo from "../../../assets/images/logo-colored.png";
import facebook from "../../../assets/images/icons/social/facebook3.png"
import appStore from "../../../assets/images/Misc/market-button/type=Appstore.png"
import playStore from "../../../assets/images/Misc/market-button/type=Google Play.png"
const Footer = () => {
    return (
        <div className="footer-container">
			<div className="left">
                <img className="brand" src={logo} alt="Logo" />
                <p>Best information about the company gies here but now lorem ipsum is</p>
                <div className="social-icons">
                    <img src={facebook} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={facebook} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="item">
                    <h5>About</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Find store</li>
                        <li>About Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="item">
                    <h5>About</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Find store</li>
                        <li>About Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="item">
                    <h5>About</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Find store</li>
                        <li>About Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="item">
                    <h5>About</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Find store</li>
                        <li>About Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="item marketplace">
                    <h5>Get App</h5>
                    <div className="icons">
                        <img src={appStore} alt="appStore icon"/>
                        <img src={playStore} alt="playstore icon"/>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Footer;