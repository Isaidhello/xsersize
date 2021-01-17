import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DateRangeIcon from '@material-ui/icons/DateRange';

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


export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Kalender" value="kalender" icon={<DateRangeIcon />} />
        <BottomNavigationAction label="Favorites" value="mijnaccout" icon={<PersonOutlineIcon />} />
        <BottomNavigationAction label="Workouts" value="workouts" icon={<FitnessCenterIcon />} />
      </BottomNavigation>
    );
  }