import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { green, lightBlue } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import PlaceIcon from "@mui/icons-material/Place";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

const LoginMap = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid container justifyContent="space-between" sx={{ mt: 3 }}>
        <Grid item xs={1}>
          <Tooltip title="Sign In & Sing Up" arrow>
            <Avatar
              variant="rounded"
              sx={{ bgcolor: green[500], width: 45, height: 45 }}
            >
              <PersonOutlinedIcon />
            </Avatar>
          </Tooltip>
        </Grid>
        <Grid item xs={1}>
          <Grid container justifyContent="end">
            <Grid item>
              <Tooltip title="Map" arrow onClick={handleClick}>
                <Avatar
                  className="map-comp"
                  variant="rounded"
                  sx={{ bgcolor: lightBlue[400], width: 45, height: 45 }}
                >
                  <PlaceIcon />
                </Avatar>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*-------------------------------------------------------Dialog */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Map</DialogTitle>
        <DialogContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906755934!2d73.69815173111603!3d18.524870612299356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691658302142!5m2!1sen!2sin"
            width="550"
            height="400"
            allowfullscreen=""
            title="PuneMap"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginMap;
