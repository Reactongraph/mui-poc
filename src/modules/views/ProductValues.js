import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import svgImage1 from '../../images/productValues1.svg'
import svgImage2 from '../../images/productValues2.svg'
import svgImage3 from '../../images/productValues3.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#fff5f8',
  },
  layoutBody: {
   marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   padding: `0px ${theme.spacing(5)}px`,
  },
  image: {
    height: 55,
  },
  title: {
     marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

const ProductValues = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={12} md={4} className="box-shadow">
            <div className={classes.item}>
              <img
                className={classes.image}
                src={svgImage1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Luxury hotels
              </Typography>
              <Typography variant="h5">
                {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
                {', go for a mini-vacation just a few subway stops away from your home.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="box-shadow">
            <div className={classes.item}>
              <img
                className={classes.image}
                src={svgImage2}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                {'your Sundays will not be alike.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="box-shadow">
            <div className={classes.item}>
              <img
                className={classes.image}
                src={svgImage3}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
