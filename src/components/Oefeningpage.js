import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./Navbar";
import OefeningenLijst from "./oefeningen-lijst";
import ToevoegenReps from "./toevoegen-reps";
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
    //dit is de oefeningen pagina bekijk oefening-lijst.jsx en toevoegen-reps.jsx voor de logika hierachter
<div>
    <h1>Oefeningen</h1>

    <ToevoegenReps />
    <OefeningenLijst />
    <Navbar />
</div>
  );
}