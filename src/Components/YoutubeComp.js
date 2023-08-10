import React from "react";
import Grid from "@mui/material/Grid";
const YoutubeComp = () => {
  return (
    <>
      <Grid
        container
        sx={{ mt: 2 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {/*--------------------------------------------------------------Youtube Video 1 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          textAlign="center"
          sx={{ width: 560, height: 315 }}
        >
          <iframe
            // width="560"
            // height="315"
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/668nUCeBHyY"
            title="Video-1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: 5 }}
          />
        </Grid>
        {/*---------------------------------------------------------------Youtube Video 2 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ mt: { xs: 2, sm: 0, md: 0 }, width: 560, height: 315 }}
          textAlign="center"
        >
          <iframe
            // width="560"
            // height="315"
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/Faow3SKIzq0"
            title="Video-2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: 5 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default YoutubeComp;
