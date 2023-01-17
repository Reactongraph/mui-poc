import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff5f8",
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    display: "flex",
    position: "relative",
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
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    textAlign: "center",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

const ProductValues = (props) => {
  const { classes } = props;
  const viewData = [
    {
      imageUrl: require("../../images/chair.png"),
      alt: "chair",
      headTitle: "Luxury hotels",
      subTitle:
        "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.",
    },
    {
      imageUrl: require("../../images/wheel.png"),
      alt: "wheel",
      headTitle: "New experiences",
      subTitle:
        "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.",
    },
    {
      imageUrl: require("../../images/amount.png"),
      alt: "amount",
      headTitle: "Exclusive rates",
      subTitle:
        "By registering, you will access specially negotiated rates that you will not find anywhere else.",
    },
  ];
  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} component="section" width="large">
        <Grid container xs={12} className={classes.container}>
          {viewData?.map((item, index) => {
            return (
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                key={`${item?.headTitle}-${index}`}
                className="box-shadow">
                <div className={classes.item}>
                  <img className={classes.image} src={item?.imageUrl} alt={item?.alt} />
                  <Typography variant="h6" className={classes.title}>
                    {item?.headTitle}
                  </Typography>
                  <Typography variant="h5">{item?.subTitle}</Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </LayoutBody>
    </section>
  );
};

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
