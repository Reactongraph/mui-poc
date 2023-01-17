import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import { NavLink } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#000",
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  iconSpacing: {
    gap: `${theme.spacing.unit * 0.2}rem`,
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    textAlign: "center",
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
          <Grid item xs={12} sm={4} md={2} className="w3_agile-footer1 f1">
            <h2>Adventure</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem atus error
              sit volupt unde omnis iste iatis un.
            </p>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className="footerColorHeading">
              Adventure Island
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <NavLink href="#">Services</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink href="#">Privacy</NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className="footerColorHeading">
              Support
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <NavLink href="#">Contact</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink href="#">info@materialtest.com</NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className="footerColorHeading">
              Pages
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <NavLink to="/signup" className="textFooter">
                  Sign up
                </NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink to="/signin" className="textFooter">
                  Sign in
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" gutterBottom className="footerColorHeading">
              Follow Us
            </Typography>
            <Grid container className={classes.iconSpacing} xs={12}>
              <Grid item>
                <Link href="#" className="hover_icon">
                  <i className="fa icon1 fa-facebook icons" aria-hidden="true"></i>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="hover_icon">
                  <i className="fa icon2 fa-twitter icons" aria-hidden="true"></i>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="hover_icon">
                  <i className="fa icon3 fa-google-plus icons" aria-hidden="true"></i>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <i className="fa icon3 fa-linkedin icon4 icons" aria-hidden="true"></i>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="footerborder">
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
};

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(pure, withStyles(styles))(AppFooter);
