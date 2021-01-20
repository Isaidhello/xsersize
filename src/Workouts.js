import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import OefeningenLijst from "./components/oefeningen-lijst";
import ToevoegenReps from "./components/toevoegen-reps";
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
    <h1>Workouts</h1>

    <Navbar />

    <OefeningenLijst />
    <ToevoegenReps />
</div>
  );
}