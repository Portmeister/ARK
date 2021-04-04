import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} href="/arks">Submit ARK</MenuItem>
                  <MenuItem onClick={handleClose} href="/About">About Us</MenuItem>
                  <MenuItem onClick={handleClose} href="/provider">Login</MenuItem>
                </Menu>
              </div>
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              <a className="navbar-brand" href="/">
                ARK
              </a>
            </Typography>
            <Typography variant="h4" className={classes.title}>
              <a className="navbar-brand" href="/About">
                About
              </a>
            </Typography>
            <Button color="inherit" href="/provider">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default Nav;
