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
import { Box, Grid } from "@material-ui/core";

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
  imagesection: {
    backgroundColor: "#fff5f8",
    padding: "20px",
  },
  aboutsection: {
    padding: "20px",
    color: "blue",
  },
}));

export default function ModalLayout({ open, handleClose, data }) {
  const classes = useStyles();

  const pointsArray = data.about
    .split(/\n\s*/)
    .filter((point) => point.trim() !== "");

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
            <Typography className={classes.title}>{data.title}</Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justifyContent="flex-end"
          className={classes.imagesection}
        >
          <Grid item xs={12} md={6}>
            <h2>About - {data.title}</h2>
            <div className={classes.aboutsection}>
              <ul>
                {pointsArray.length > 0 &&
                  pointsArray.map((item, index) => {
                    return (
                      <>
                        <li key={index}>{item}</li>
                        <br></br>
                      </>
                    );
                  })}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "100%", height: "100%" }}>
              <img
                src={data.image}
                alt="image_file"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
