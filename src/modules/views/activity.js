import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AppAppBar from "./AppAppBar";
import AppFooter from "./AppFooter";
import ModalLayout from "../components/modalLayout";
import { activities } from "../../constant";

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
  favoriteButton: {
    color: theme.palette.error.main,
  },
}));


const AdventureActivities = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  return (
    <React.Fragment>
      <AppAppBar />
      <div className={classes.root}>
        <h1>GET READY FOR ADVENTURE</h1>
        <Grid container spacing={4}>
          {activities.map((activity, index) => (
            <>
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                    onClick={() => {
                      setItem(activity);
                      setOpen(true);
                    }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={activity.image}
                      title={activity.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {activity.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <IconButton
                    aria-label="add to favorites"
                    className={classes.favoriteButton}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Card>
              </Grid>
              {open ? (
                <ModalLayout
                  open={open}
                  handleClose={() => {
                    setOpen(false);
                  }}
                  data={item}
                />
              ) : (
                ""
              )}
            </>
          ))}
        </Grid>
      </div>
      <AppFooter />
    </React.Fragment>
  );
};

export default AdventureActivities;
