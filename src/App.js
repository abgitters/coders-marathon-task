import "./App.css";
import CarousalComp from "./Components/CarousalComp";
import YoutubeComp from "./Components/YoutubeComp";
import ButtonModel from "./Components/ButtonModel";
import WizardDesign from "./Components/WizardDesign";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "./Components/Footer";
import Divider from "@mui/material/Divider";
import LoginMap from "./Components/LoginMap";

function App() {
  return (
    <Container>
      <Grid container direction="column" justifyContent="center">
        <Grid item xs={12}>
          <LoginMap />
        </Grid>
        <Grid item xs={12}>
          <CarousalComp />
        </Grid>
        <Grid item xs={12}>
          <YoutubeComp />
        </Grid>
        <Grid item xs={12}>
          <ButtonModel />
        </Grid>
        <Grid item xs={12}>
          <WizardDesign />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
