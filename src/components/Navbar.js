import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { Switch, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

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
  primary: {
    main: '#0B9289',
  },
  secondary: {
  main: '#f44336',
},
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //dit is de navigatie gedeelte v/d app hier zijn de iconen die linken naar de andere components
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        style={{marginBottom: '0'  }}
      >
        <Link to="/kalender">
          <BottomNavigationAction
            label="Kalender"
            value="recents"
            icon={<DateRangeIcon />}
          />
        </Link>
        <Link to="/gebruiker">
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<PersonIcon />}
          />
        </Link>
        <Link to="/">
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<FitnessCenterIcon />}
          />
        </Link>
        <Link to="/oefeningpage">
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<AccessibilityNewIcon />}
          />
        </Link>
      </BottomNavigation>
    </div>
  );
}
