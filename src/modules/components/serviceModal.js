import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./carousel";
import { Card, CardActionArea, CardContent, CardMedia, Grid } from "@material-ui/core";
import { cardImages } from "../../constant";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#000000",
  },
  headerlayout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "25px",
  },
  card: {
    height: "100%",
    display: "flex",
    justifyContent:'space-between',
    alignItems:'center',
  },
  cardMedia: {
    paddingTop: "2%",
    width:'100px',
    height:'100px',
    borderRadius:'50%'
  },
  cardContent: {
    flexGrow: 1,
  },
  text :{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  layout:{
     margin:'40px',
    backgroundColor :'#fff5f8',
  }
}));

const ServiceModalPage = ({open,handleClose,data})=>{
      const classes = useStyles();

    return (
        <>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar position="relative" className={classes.header}>
            <Toolbar className={classes.headerlayout}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography className={classes.title}>{data.name}</Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                close
              </Button>
            </Toolbar>
          </AppBar>
           <div>
               <Carousel images={data.otherimage} />
                <div className={classes.layout}>
                <Grid container spacing={4}>
               {  cardImages.map((item,index)=>{
                return(
                  <Grid item  xs={12} sm={6} md={4} key={index}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.cardMedia}
                        image={item.image}  
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Price : {data.fees} / day 
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          className={classes.text}
                        >
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>  
                ) 
               })}
        </Grid>
                </div>
           </div>
        </Dialog>
      </>
    )
}

export default ServiceModalPage;