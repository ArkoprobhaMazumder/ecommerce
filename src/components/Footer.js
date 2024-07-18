import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();

    return (
        <>
            <footer>
                <div className="container">
                <div className="footer-container footer-container-first">
                    <p>Ready to get Started? <br />Talk to us today</p>
                    <a href="#">
                        <button className='footer-first-button'>Get Started</button>
                    </a>
                </div>
                <div className="footer-container footer-container-second">
                    <div className="footer-text1">
                        <p>Arkoprobha Mazumder</p>
                        <p>Feel Free to Contact For Business Purposes</p>
                    </div>
                    <div className="footer-text2">
                        <p>Subscribe to get important updates</p>
                        <input type="text" placeholder="your email" />
                        <NavLink to="/contact">
                            <button className="footer-second-button">Subscribe</button>
                        </NavLink>
                    </div>
                    <div className="footer-text3">
                        <p>Follow us</p>
                        <div className="footer-icons">
                            <a href="https://www.linkedin.com/in/arkoprobhamazumder" target="_blank" rel="noreferrer"><FaLinkedin className="footer-icon" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100084673733234" target="_blank" rel="noreferrer"><FaFacebookF className="footer-icon" /></a>
                            <a href="https://github.com/ArkoprobhaMazumder" target="_blank" rel="noreferrer"><FaGithub className="footer-icon" /></a>
                        </div>
                    </div>
                    <div className="footer-text4">
                            <p>Call Me</p>
                            <p>+91-9832813553</p>
                        </div>
                </div>
                <hr />
                <div className="footer-container footer-container-third">
                            <p>@{year} <strong>Arkoprobha</strong>| @All Copyright Reserved</p>
                            <div className="footer-last-textbox">
                                <p>PRIVACY AND POLICY</p>
                                <p>TERMS & CONDITION</p>
                            
                            </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
