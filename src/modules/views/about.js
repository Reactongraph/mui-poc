import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";
import AppAppBar from "./AppAppBar";
import AppFooter from "./AppFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: '#fff5f8',
    marginTop :'20px'
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(4),
    justifyContent:'center',
    alignItems : 'center'
  },
  cardMedia: {
    width: 200,
  },
  cardContent: {
    // flex: "1 0 auto",
     padding : '10px'
  },
  text :{
    margin : '20px',
  },
  cardlayout:{
    marginTop:'40px'
  },
  textP : {
    text:'center',
  },
  image :{
    width : '40px',
    height :'40px',
  } 


}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <AppAppBar />
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.title}>
        Welcome to Adventure Seekers!
      </Typography>
      <Typography variant="body1" paragraph className={classes.text}>
        Welcome to Adventure Seekers! Embark on a journey with us as we explore
        the wonders of the world. From towering mountains to hidden valleys, our
        passion for adventure knows no bounds. Join our community of explorers
        and discover the thrill of pushing your limits, forging new paths, and
        embracing the unknown.
      </Typography>
      <Grid container spacing={4} className={classes.cardlayout} >
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <img src="/mission.jpeg" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Mission
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <img src="/responsibility.jpg" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Responsibility
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <img src="/vision.jpg" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Vision
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <img src="/service.jpg" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Service
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <img src="/dream.webp" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Dream
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <img src="/business.jpeg" alt="image_mission" className={classes.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Our Business
              </Typography>
              <Typography  color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    <AppFooter />
    </React.Fragment>
  );
};

export default AboutPage;
