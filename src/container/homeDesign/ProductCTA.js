import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import LayoutBody from "../../components/LayoutBody";
import Button from "../../components/Button";
import notification from "../../utils/notification";
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: 0,
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit / 2}rem ${(theme.spacing.unit * 3) / 8}rem`,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    width: "100%",
  },
  imagesWrapper: {
    position: "relative",
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "url(/static/onepirate/productCTAImageDots.png)",
  },
  image: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    maxWidth: 600,
  },
});

const ProductCTA = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    notification.info("We will send you our best offers, once a week.");
  };

  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your email"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}>
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </LayoutBody>
  );
};

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
