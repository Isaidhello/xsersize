import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Navbar from "./components/Navbar";
import OefeningenLijst from "./components/oefeningen-lijst";
import ToevoegenReps from "./components/toevoegen-reps";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Switch, Route, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    //dit is de workouts pagina bekijk oefening-lijst.jsx en toevoegen-reps.jsx voor de logika hierachter
    <Grid container justify="center">
      <div>
        <h1>Workouts</h1>

        <h2>Snel start</h2>
        <Button variant="contained" color="primary">
          Start Workout
        </Button>
        <h1>Routines</h1>

        <h2>Mijn Routines</h2>
        <p>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Dag 1 - Upperbody
          </Button>
        </p>
        <p>
          <Button variant="contained" color="primary">
            Dag 2 - Legs
          </Button>
        </p>
        <p>
          <Button variant="contained" color="primary">
            Dag 3 - Cardio
          </Button>
        </p>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Dag 1 - Upperbody"}</DialogTitle>
        <DialogContent>
        <List>
        <ListItemText primary="Hammer Curls 8 reps" />
        <ListItemText primary="Pullups 5 reps" />
        <ListItemText primary="Pushups 2 reps " />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuleren
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Starten
          </Button>
        </DialogActions>
      </Dialog>

      </div>
    </Grid>
  );
}
