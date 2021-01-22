import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import Kalender from "./images/kalender.PNG";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="center">
<div>
<Grid item xs={12} align="center">
    <h1>Kalender</h1>
    </Grid>
     <Grid item align='center'  xs={6} sm={3}>
    {/* Deze pagina is een wip hier komt een kalender met daarin de dagen waar je bent wezen sporten
    en de progres pictures */}
    <img src={Kalender} alt="not found" onClick={handleClickOpen} />
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Wilt u een workout inplannen?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Plan een workout vooraf in zodat je gelijk kan beginnen op de aangegeven dag.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuleren
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Bevestigen
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
</div>


</Grid>
  );
}