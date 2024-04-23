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
import Caursole from "./caursole";
import { Card, CardActionArea, CardContent, CardMedia, Grid } from "@material-ui/core";


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
               <Caursole images={data.otherimage} />
                <div className={classes.layout}>
                <Grid container spacing={4}>
                <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={'https://media.istockphoto.com/id/1017790284/vector/cost-reduction-decrease-icon-vector-symbol-image-isolated-on-background.jpg?s=612x612&w=0&k=20&c=nfAt8WFHzYdLvtFqbN2FT0Po8p8FXNopO6VJUwl2fTs='}  
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
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={'https://img.freepik.com/premium-vector/star-talk-logo-element-design-template-icon_442940-367.jpg'}  
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                         Rating : {data.ranking} / 5
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
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={'https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg'}  
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Staff : {data.staff} persons
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
        </Grid>
                </div>
           </div>
        </Dialog>
      </>
    )
}

export default ServiceModalPage;