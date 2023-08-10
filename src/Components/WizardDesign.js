import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormTab from "./Tabs/FormTab";
import TextTab from "./Tabs/TextTab";
import ImageTab from "./Tabs/ImageTab";
import VideoTab from "./Tabs/VideoTab";

const WizardDesign = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={8}>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                centered
              >
                <Tab label="Form Tab" sx={{ fontWeight: 600 }} />
                <Tab label="Text Tab" sx={{ fontWeight: 600 }} />
                <Tab label="Image Tab" sx={{ fontWeight: 600 }} />
                <Tab label="Video Tab" sx={{ fontWeight: 600 }} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <FormTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TextTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <ImageTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <VideoTab />
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WizardDesign;
