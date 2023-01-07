import React, { useState } from "react";
// import { Container, Button, Typography, Grid } from "@material-ui/core";
import dashboardIcon from "../../images/dashboard.png";
import analyticsIcon from "../../images/analytics.png";
import stackIcon from "../../images/stack.png";
import bondIcon from "../../images/bond.png";
import buyPassIcon from "../../images/buyPass.png";
import chartIcon from "../../images/chart.png";
import docIcon from "../../images/documentation.png";

import "./index.css";

function Index() {
  const [bondExpand, setBondExpand] = useState(false);

  const showDetail = () => {
    setBondExpand(!bondExpand);
  };
  return (
    <div className="nav">
      <button className="navBtn">
        <span className="navIcon">
          <img src={dashboardIcon} alt="icon" />
        </span>
        <span className="navTitle">Dashboard</span>
      </button>
      <button className="navBtn">
        <span className="navIcon">
          <img src={analyticsIcon} alt="icon" />
        </span>
        <span className="navTitle">Analytics</span>
      </button>

      <button className="navBtn">
        <span className="navIcon">
          <img src={stackIcon} alt="icon" />
        </span>
        <span className="navTitle">Stake</span>
      </button>

      <button className="navBtn" onClick={showDetail}>
        <span className="navIcon">
          <img src={bondIcon} alt="icon" />
        </span>
        <span className="navTitle">Bond</span>
      </button>
      {bondExpand && (
        <div className="detailBox">
          <p style={{ color: "#6A6971" }}>Bond discounts</p>
          <div className="dataBox">
            <span className="detailData">XIV-BNB LP</span>
            <span className="detailData">-16.28%</span>
          </div>
          <div className="dataBox">
            <span className="detailData">PASS-BNB LP</span>
            <span className="detailData">-16.28%</span>
          </div>
          <div className="dataBox">
            <span className="detailData">XIV</span>
            <span className="detailData">-16.28%</span>
          </div>
          <div className="dataBox">
            <span className="detailData">BNB</span>
            <span className="detailData">-16.28%</span>
          </div>
          <div className="dataBox">
            <span className="detailData">BUSD</span>
            <span className="detailData">-16.28%</span>
          </div>
        </div>
      )}

      <button className="navBtn">
        <span className="navIcon">
          <img src={buyPassIcon} alt="icon" />
        </span>
        <span className="navTitle">Buy PASS</span>
      </button>

      <button className="navBtn">
        <span className="navIcon">
          <img src={chartIcon} alt="icon" />
        </span>
        <span className="navTitle">Price Chart</span>
      </button>

      <button className="navBtn">
        <span className="navIcon">
          <img src={docIcon} alt="icon" />
        </span>
        <span className="navTitle">Documentation</span>
      </button>
    </div>
  );
}

export default Index;
