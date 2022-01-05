import React from "react";
// import { Row, Col } from "react-bootstrap";
import headerImg from "/src/assets/images/landing/header.jpg";
import "./index.scss";

const Header = () => {
  return (
    <header style={{ background: `url("${headerImg}") 100% / cover` }}>
      <div className="bg-overlay"></div>

      <div className="content">
        <h1>Unlocking the full potential of urban communities</h1>
      </div>
    </header>
  );
};

export default Header;
