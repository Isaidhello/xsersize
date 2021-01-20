import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
<div>
    <h1>Mijn Account</h1>
{/* Deze pagina is een wip hier hier worden de gegevens van de gebruiker gezet bij het maken van een account */}
Naam: Adam Bye
Leeftijd: 26
    <Navbar />
</div>
  );
}