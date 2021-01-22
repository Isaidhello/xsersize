import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Workouts from "./Workouts";
import Kalender from "./Kalender";
import NewRoutine from "./Newroutine";
import Gebruiker from "./Gebruiker";
import OefeningenLijst from "./components/oefeningen-lijst";
import Oefeningpage from "./components/Oefeningpage";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Box} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import firebase from "./firebase";


const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden'
  },
}));

export default function App() {
  const classes = useStyles()
  return (
    //In deze file worden alle pagina's geladen en een path gegeven als je een nieuwe pagina wil maken en linken moet die hier toegevoegd worden.
    <React.Fragment>
      <CssBaseline />
      <Router basename = '/xsersize'>
      <Box position="static" style={{height: '93.4vh' }}>
    <Header />
    <Switch>

    <Route path="/navbar">
    <Navbar />
    </Route>

    <Route exact path="/">
    <Workouts />
    </Route>

    <Route path="/kalender">
    <Kalender />
    </Route>

    <Route path="/newroutine">
    <NewRoutine />
    </Route>

    <Route path="/gebruiker">
    <Gebruiker />
    </Route>

    <Route path="/oefeningpage">
    <Oefeningpage />
    </Route>

    </Switch>


    </Box>
    <Navbar />
    </Router>
    </React.Fragment>
  );
}