import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

        <Link to="/kalender">
        <Button variant="contained">Kalender</Button>
    </Link>

    <Link to="/gebruiker">
        <Button variant="contained">Mijn Account</Button>
    </Link>

    <Link to="/">
        <Button variant="contained">Workouts</Button>
    </Link>

    <Link to="/oefeningpage">
        <Button variant="contained">Oefeningen</Button>
    </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}