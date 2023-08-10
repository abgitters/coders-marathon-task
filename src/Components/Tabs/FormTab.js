import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const FormTab = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    email: "",
    pincode: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      email: "",
      pincode: "",
    });
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Open Console To get Result"
        action={action}
      />
      {/*----------------------------------------------------------------Form Component */}
      <Paper elevation={3} sx={{ p: { xs: 3, sm: 3, md: 4 } }}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                type="text"
                label="FirstName"
                variant="outlined"
                onChange={handleChange}
                name="firstName"
                value={formData?.firstName}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                type="text"
                label="LastName"
                variant="outlined"
                onChange={handleChange}
                name="lastName"
                value={formData?.lastName}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                type="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                name="email"
                value={formData?.email}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                type="number"
                label="Mobile"
                variant="outlined"
                onChange={handleChange}
                name="mobile"
                value={formData?.mobile}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                label="Age"
                type="number"
                variant="outlined"
                onChange={handleChange}
                name="age"
                value={formData?.age}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <TextField
                id="outlined-controlled"
                type="number"
                label="PinCode"
                variant="outlined"
                onChange={handleChange}
                name="pincode"
                value={formData?.pincode}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <Button type="submit" variant="contained" fullWidth size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default FormTab;
