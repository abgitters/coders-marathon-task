import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const VideoTab = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} textAlign="center" height={350}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Faow3SKIzq0"
              title="Video Component"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default VideoTab;
