// import logo from "./logo.svg";
import { Container, Button, Typography, Grid } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import "./App.css";
import logo from "./images/logo.png";
import twitter from "./images/twitter.png";
import discord from "./images/discord.png";
import mail from "./images/mail.png";

import Stats from "./components/Stats/";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        className="gridBox"
      >
        <Grid className="leftSide" item xs={12} sm={3}>
          <img src={logo} alt="Logo" className="logo" />
          <SideNav />

          <div className="socialIconsBox">
            {/* <Stack spacing={2} direction="row" className="socialContainer"> */}
            {/* <Button variant="text">Text</Button> */}
            <img src={twitter} alt="socialICon" />
            <img src={discord} alt="socialICon" />
            <img src={mail} alt="socialICon" />
            {/* </Stack> */}
          </div>
        </Grid>
        <Grid className="rightSide" item xs={12} sm={9}>
          <Container>
            <Stack spacing={2} direction="row" className="buttonContainer">
              {/* <Button variant="text">Text</Button> */}
              <Button className="buyNowBtn">Buy PASS</Button>
              <Button className="connectBtn">Outlined</Button>
            </Stack>
          </Container>
          {/* <p>Button</p> */}
          <p className="title">EPOCH STAKING</p>
          <Stats />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
