import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const SampleH2 = styled("h2")(() => ({
  textAlign: "center",
}));

const TextTab = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <SampleH2>Sample Text</SampleH2>
              <SampleH2>Sample Text</SampleH2>
              <SampleH2>Sample Text</SampleH2>
              <SampleH2>Sample Text</SampleH2>
              <SampleH2>Sample Text</SampleH2>
              <SampleH2>Sample Text</SampleH2>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TextTab;
