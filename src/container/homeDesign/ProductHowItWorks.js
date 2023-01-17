import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../../components/LayoutBody";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff5f8",
    overflow: "hidden",
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    gap: `${theme.spacing.unit * 0.2}rem`,
    justifyContent: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit / 4}rem`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

const ProductHowItWorks = (props) => {
  const { classes } = props;
  const viewData = [
    {
      imageUrl: require("../../images/hammer.png"),
      alt: "hammer",
      headTitle: " Appointment every Wednesday 9am.",
    },
    {
      imageUrl: require("../../images/quantity.png"),
      alt: "quantity",
      headTitle:
        "First come, first served. Our offers are in limited quantities, so be quick.",
    },
    {
      imageUrl: require("../../images/mac.png"),
      alt: "mac",
      headTitle:
        "New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.",
    },
  ];
  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} component={"section"} width="large">
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container xs={12} className={classes.container}>
            {viewData?.map((item, index) => {
              return (
                <Grid
                  item
                  key={item?.headTitle}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="box-shadow">
                  <div className={classes.item}>
                    <div className={classes.number}>{index + 1}.</div>
                    <img src={item?.imageUrl} alt={item?.alt} className={classes.image} />
                    <Typography variant="h5" align="center">
                      {item?.headTitle}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
            {/* <Grid item xs={12} md={4} className="box-shadow">
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src={require("../../images/hammer.png")}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} className="box-shadow">
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src={require("../../images/quantity.png")}
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited
                  quantities, so be quick.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} className="box-shadow">
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src={require("../../images/mac.png")}
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {"New offers every week. New experiences, new surprises. "}
                  {"Your Sundays will no longer be alike."}
                </Typography>
              </div>
            </Grid> */}
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={(linkProps) => <Link {...linkProps} href="#" variant="button" />}>
          Get started
        </Button>
      </LayoutBody>
    </section>
  );
};

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
