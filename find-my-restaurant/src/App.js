import React from "react";
import List from "./Componets/List/List";
import Map from "./Componets/Map/Map";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Grid,
 
} from "@material-ui/core";


function App() {
  return (
    <>
    <CssBaseline />
      <AppBar position="static">
        {/* <CssBaseline /> */}
        <Toolbar>
          <Typography variant="h5">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <List />
        </Grid>
        <Grid item xs={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
