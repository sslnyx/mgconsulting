import React from "react";
import "./index.scss";
// import { useState } from "react";
import siteLogoSvg from "/src/assets/images/landing/logos/MG-Logo.svg";
import waterMarkSvg from "/src/assets/images/landing/logos/MG-watermark.svg";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <footer>
      <img
        className="watermark"
        src={waterMarkSvg}
        alt="wm"
      />

      <div className="content">
        <Row>
          <Col xs="12" md="6">
            <img
              className="site-logo"
              src={siteLogoSvg}
              alt="sitelogo"
            />
          </Col>

          <Col xs="12" md="6">
            <div className="contact">
              <a href="tel:604.396.4191">604.396.4191</a>
              <br />
              <a href="mailto:gd@mgconsulting.one">gd@mgconsulting.one</a>
              <br />
              <br />
              <p className="copyright">&copy;Copyright {new Date().getFullYear()}, All rights reserved MG Consulting.</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
