import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            DG Shop
          </Typography>
          {/* <NavLink to="/todos" activeClassName="active-menu">
            Todos
          </NavLink>
          <NavLink to="/albums" activeClassName="active-menu">
            Albums
          </NavLink> */}

          <Button color="inherit">Todos</Button>
          <Button color="inherit">Albums</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
