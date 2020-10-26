import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, Divider, List, ListItem, ListItemText, Toolbar, Collapse} from '@material-ui/core';
import { A } from 'hookrouter';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/BubbleChart';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listHeader: {
    fontSize: '20px',
    color: "black"
  }
}));

export const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Chart Selector" />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
  
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[{name:'Vertical Bar Chart', value: 'vertical-bar-chart'}, {name: 'Donut Chart', value: 'donut-chart'}].map((text, index) => (
                <ListItem button key={text.name} className={classes.nested}>
                  <A href={text.value}>
                    <ListItemText primary={text.name} />
                  </A>
              </ListItem>
            ))} 
            </List>
          </Collapse>
        </List>
        <Divider />
        </div>
      </Drawer>
    </div>
  )
};