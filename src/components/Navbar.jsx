import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {exportPPT} from '../helper/ppt-generater';
import {useRoutes} from 'hookrouter';
import { routes } from "../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const match = useRoutes(routes);
  const pageName = match ? match.props.title : null;

  const handleExportPptClick = (event) => {
    exportPPT(pageName);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Button variant="contained" color="secondary" onClick= {handleExportPptClick}>Export PPT</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};