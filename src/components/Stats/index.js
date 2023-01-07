import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./index.css";

function index() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="stretch"
      spacing={3}
      className="statParent"
    >
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">PASS Price</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
            className="statParent"
          >
            <Grid item xs={12} sm={5}>
              <p className="statTitle">ARP</p>
              <p className="statData">3280%</p>
            </Grid>
            <Grid item xs={12} sm={2}>
              <p className="statTitle">/</p>
            </Grid>
            <Grid item xs={12} sm={5}>
              <p className="statTitle">ERP</p>
              <p className="statData">3%</p>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">Market Cap</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">Total Value Locked</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">Treasury Balance</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">PASS Supply</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">PASS Price</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="statBox">
          <p className="statTitle">PASS Price</p>
          <p className="statData">$1520.33</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default index;
