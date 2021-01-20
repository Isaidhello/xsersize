import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar";
import Kalender from "./images/kalender.PNG";
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
    <h1>Kalender</h1>
    {/* Deze pagina is een wip hier komt een kalender met daarin de dagen waar je bent wezen sporten
    en de progres pictures */}
    <img src={Kalender} alt="not found" width="460" height="460" />
    <Navbar />
</div>
  );
}