import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";
import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import Home from "./Home";
import SignUp from "./container/SignUp";
import SignIn from "./container/SignIn";
import { SnackbarUtilsConfigurator } from "./utils/notification";
const ProjectRoutes = () => {
  const navigation = useNavigate();
  const token = window.localStorage.getItem("token");
  const AuthData = useSelector((state) => state);
  const publicPath = ["/signin", "/signup"];
  useEffect(() => {
    if (token && publicPath?.includes(window?.location?.pathname)) {
      navigation("/");
    }
  }, [token, window?.location?.pathname, AuthData?.loginData]);
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={2000}
      TransitionComponent={Slide}
      transitionDuration={{ enter: 300, exit: 500 }}>
      <SnackbarUtilsConfigurator />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </SnackbarProvider>
  );
};

export default ProjectRoutes;
