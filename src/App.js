import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Navbar from "./Navbar";
import Workouts from "./Workouts";
import Kalender from "./Kalender";
import Routine from "./Routine";
import NewRoutine from "./Newroutine";
import Gebruiker from "./Gebruiker";
import OefeningenLijst from "./components/oefeningen-lijst";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";



import firebase from "./firebase";

firebase.firestore().collection('oefeningen').add({
  titel: 'Curls',
  reps: 8
})


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function App() {

  return (
    <div ClassName="App">
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

    <Route path="/routine">
    <Routine />
    </Route>

    <Route path="/newroutine">
    <NewRoutine />
    </Route>

    <Route path="/gebruiker">
    <Gebruiker />
    </Route>

    </Switch>
    </div>
  );
}