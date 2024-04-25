import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, CardActionArea, CardMedia} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import AppAppBar from "./AppAppBar";
import ServiceModalPage from "../components/serviceModal";
import { hotels } from "../../constant";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor :'#fff5f8'
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  text :{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));

const Service = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [hoteldata, setHotelData] = useState({});

  return (
    <>
      <AppAppBar />
      <div className={classes.root}>
      <Grid container spacing={4}>
          {hotels.map((item, index) => (
            <>
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                      onClick={() => {
                        setHotelData(item);
                        setOpen(true);
                      }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.image}
                      title={item.name}   
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.text}
                      >
                         <span>Rating : {item.ranking}</span>
                         <span>Price : {item.fees}</span>     
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {open ? (
                <ServiceModalPage
                  open={open}
                  handleClose={() => {
                    setOpen(false);
                  }}
                  data={hoteldata}
                />
              ) : (
                ""
              )}

              </Grid>
            </>
          ))}
        </Grid>
      </div>
      <AppFooter />
    </>
  );
};

export default Service;
