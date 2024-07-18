import "./trusted.css";
import { FaFacebookSquare } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiSkype } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
const Trusted = () => {

  


  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted_main_box">
          <div className="trusted-container">
            <h3 className="trusted_title">Trusted By 1000+ Companies</h3>
          </div>
          <div className="icon-container">
            <FaFacebookSquare className="trusted-icon" />
            <SiFlipkart className="trusted-icon" />
            <FaCcAmazonPay className="trusted-icon" />
            <SiSkype className="trusted-icon" />
            <FaTwitter className="trusted-icon" />
            <SiCoinmarketcap className="trusted-icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trusted
