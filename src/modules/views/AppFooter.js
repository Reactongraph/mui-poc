import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#000',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150,
  },
});

const AppFooter = (props) => {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2} className="w3_agile-footer1 f1">
            <h2>
              Adventure
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atus error sit volupt unde omnis iste
                            iatis un.</p>
            {/* <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Home</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">About</Link>
              </li>
            </ul> */}
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Adventure Island
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Services</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Support
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Contact</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">info@materialtest.com</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Pages
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <NavLink to="/signup" className="textFooter">Sign up</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink to="/signin" className="textFooter">Sign in</NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Follow Us
            </Typography>
            <ul class="footer-social-icons">
              <li>
                <Link href="#" className="hover_icon">
                  <i class="fa icon1 fa-facebook icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover_icon">
                  <i class="fa icon2 fa-twitter icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover_icon">
                  <i class="fa icon3 fa-google-plus icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa icon3 fa-linkedin icon4 icons" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={12} className="footerborder">
            <Typography variant="caption" align="center" className="footerColorHeading">
              <Link href="#" title="Flaticon">
                Copyright @ www.mymaterialtest.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(AppFooter);
