import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 24,
    underline :'none',
    color : 'white'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  left: {
    flex: 0,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  center:{
    flex : 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap : "20px",
    underline :'none',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
   marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: '#fff5f8',
  },
});

const AppAppBar = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
          >
            {'Adventure Island'}
          </Link>
          <div className={classes.center}>
          <Link
            variant="h6"
            underline="none"
            className={classes.rightLink}
            to="/about"
          >
            {'About'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            className={classes.rightLink}
            to="/activity"
          >
            {'Activities'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            className={classes.rightLink}
            to="/service"
          >
            {'Our Service'}
          </Link>
          </div>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/signin"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              to="/signup"
            >
              {'Sign Up'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
