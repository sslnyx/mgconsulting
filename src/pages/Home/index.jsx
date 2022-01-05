import React from "react";
import overviewImg from "/src/assets/images/landing/overview.jpg";
import "./index.scss";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="content-bg d-none d-lg-block">
        <img src={overviewImg} alt="overview" />
        <div className="tint"></div>
      </div>

      <div className="content">
        <div className="text-block">
          <h3 className="mb-4">
            MG Consulting is a multidisciplinary land use and development
            consulting firm helping create vibrant communities across the Lower
            Mainland.
          </h3>

          <p>
            Drawing from our specialized in-house talent and consultant network,
            we identify optimal development opportunities and ensure successful
            project completion for our clients.
          </p>

          <p>
            Our new website is launching soon. If you're looking to learn more
            about what we do at MG Consulting, let's connect.
          </p>

          <br />

          <div className="text-center">
            <a className="btn-main" href="mailto:gd@mgconsulting.one">Let's Chat</a>
          </div>
        </div>
      </div>

      <div className="d-block d-lg-none" style={{ position: "relative" }}>
        <img src={overviewImg} alt="overview" />
        <div className="tint"></div>
      </div>
    </div>
  );
};

export default Home;
