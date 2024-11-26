import Image from "next/image";
const Footer = () => {
    return (
        <footer>
  <div className="footer">
    <p>We Are Social</p>
    <div className="icons">
      <a href="#" className="social-icons">
        <i className="fa-brands fa-facebook fa" />
      </a>
      <a href="#" className="social-icons">
        <i className="fa-brands fa-twitter fa" />
      </a>
      <a href="#" className="social-icons">
        <i className="fa-brands fa-instagram fa" />
      </a>
      <a href="#" className="social-icons">
        <i className="fa-brands fa-youtube fa" />
      </a>
    </div>
    <hr id="footerHr" />
    <div>
      <p className="footer-p">
        © 2024 Imomotimi Foundation. All Rights Reserved.
      </p>
      <div className="footer-line"></div>
    </div>
  </div>
</footer>

    );
};
export default Footer;