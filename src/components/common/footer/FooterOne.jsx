import React from "react";

const FooterOne = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Company<span>logo</span>
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">
          Quaere eTechnologies Pvt Ltd © 2023
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>7th Floor, Cyber Tower, Vibhuti Khand </span> Gomti Nagar,
            Lucknow
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+91 7388 869 999</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="sales@quaeretech.com">sales@quaeretech.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Quaere is a leading global technology company and product development
          founded in the year 2007. Headquartered in India. With mission "To
          expose the quality of Life of the people world wide. We have recently
          stepped in Europe, through our pioneering and entrepreneur spirit."
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
