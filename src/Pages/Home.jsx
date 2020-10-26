import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Sidebar />
      <main className={classes.content}>
      <Toolbar />
      <Typography>
        ABVDBJBDDSNBSNBDBN
      </Typography>
      </main>
    </div>
  )
};