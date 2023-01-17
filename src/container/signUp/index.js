// --- Post bootstrap -----
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { Field, Form, FormSpy } from "react-final-form";
import Typography from "../../components/Typography";
import AppFooter from "../homeDesign/AppFooter";
import AppAppBar from "../homeDesign/AppAppBar";
import AppForm from "../homeDesign/AppForm";
import { required } from "../../components/form/validation";
import { emailRegex, passwordRegex } from "../../utils/regex";
import RFTextField from "../../components/form/RFTextField";
import FormButton from "../../components/form/FormButton";
import FormFeedback from "../../components/form/FormFeedback";
import withRoot from "../withRoot";
import actions from "../../redux/Actions";

const styles = (theme) => ({
  form: {
    marginTop: theme.spacing.unit * 6,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  feedback: {
    marginTop: theme.spacing.unit * 2,
  },
});

const SignUp = (props) => {
  const [sent] = useState(false);
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = required(["email", "password"], values);
    if (!errors.email && !emailRegex?.test(values?.email)) {
      errors.email = "InValid Email";
    }
    if (!errors.password && !passwordRegex?.test(values?.password)) {
      errors.password = "Strong passowrd";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    dispatch(actions.resquestSignUp(values));
  };

  const { classes } = props;

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            {"Already have an account? "}
            <NavLink to="/signin">Login In</NavLink>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              {/* <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid> */}
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth>
                {submitting || sent ? "In progress…" : "Sign Up"}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
};

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withRoot, withStyles(styles))(SignUp);
