import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { Close } from '@material-ui/icons';
import { Info } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    flexWrap: 'inherit',
    [theme.breakpoints.up('md')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
  },
  contentMessage: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
  },
  contentAction: {
     paddingLeft: theme.spacing(2),
  },
  info: {
    flexShrink: 0,
    marginRight: theme.spacing(2),
  },
  close: {
    padding: theme.spacing(),
  },
});

const Transition = (props) => {
  return <Slide {...props} direction="down" />;
}

const Snackbar = (props) => {
  const { classes, onClose, message, ...other } = props;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6e3}
      transition={Transition}
      ContentProps={{
        'aria-describedby': 'snackbar',
        classes: {
          root: classes.content,
          message: classes.contentMessage,
          action: classes.contentAction,
        },
      }}
      message={
        <React.Fragment>
         <Info className={classes.info} />
          <span id="snackbar">{message}</span>
        </React.Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
        <Close />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  SnackbarContentProps: PropTypes.object,
};

export default withStyles(styles)(Snackbar);
