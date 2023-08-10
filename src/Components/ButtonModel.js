import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";

const ButtonModel = () => {
  const [open, setOpen] = useState(false);
  const [dialVal, setDialVal] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (val) => {
    setOpen(true);
    setDialVal(val);
  };
  return (
    <Box sx={{ my: { xs: 0, sm: 1, md: 2 } }}>
      <Grid container textAlign="center">
        <Grid item xs={12} sm={6} md={6}>
          <Button
            variant="contained"
            onClick={() => handleClick(1)}
            sx={{ mt: { xs: 1, sm: 0, md: 0 } }}
            size="large"
          >
            Tab 1
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button
            variant="contained"
            onClick={() => handleClick(2)}
            sx={{ mt: { xs: 3, sm: 0, md: 0 } }}
            size="large"
          >
            Tab 2
          </Button>
        </Grid>
      </Grid>

      {/*-------------------------------------------Dialog */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Model {dialVal}</DialogTitle>
        <DialogContent>Model {dialVal} is Clicked !</DialogContent>
      </Dialog>
    </Box>
  );
};

export default ButtonModel;
