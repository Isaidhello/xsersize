import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import Grid from '@material-ui/core/Grid';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles({
  root: {
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container justify="center">
<div>
    <h1>Mijn Account</h1>
{/* Deze pagina is een wip hier hier worden de gegevens van de gebruiker gezet bij het maken van een account */}
<h4>Naam: Adam Bye<br></br>
Leeftijd: 26<br></br>
Gewicht: 75kg<br></br>
Workouts: 3<br></br>
</h4>
<Button variant="contained" color="primary">
  Wijzigen
</Button>
</div>
</Grid>
  );
}