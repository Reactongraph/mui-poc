import withRoot from "../withRoot";
// --- Post bootstrap -----
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
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

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [sent] = useState(false);

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

  const handleFormSubmit = (values) => {
    dispatch(actions.resquestLogin(values));
  };

  const { classes } = props;

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Not a member yet? "}
            <NavLink to="/signup">Sign Up here</NavLink>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleFormSubmit}
          subscription={{ submitting: true }}
          validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
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
                size="large"
                color="secondary"
                fullWidth>
                {submitting || sent ? "In progress…" : "Sign In"}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withRoot, withStyles(styles))(SignIn);
