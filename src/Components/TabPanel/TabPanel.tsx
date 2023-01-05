import * as React from "react";
import {Tab,Tabs,Typography,Box} from "@mui/material";
import "./tabPanel.scss";
import { OverView } from "../OverView";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ paddingX: 3,paddingTop:2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const TabSpan = styled("span")(({ theme }) => ({
  height: "32px",
  fontSize: "12px",
  padding: "8px 8px 8px 8px",
  color: "#977D23",
  backgroundColor: "#FFD84F",
  borderRadius: "0px 6px 6px 0px",
  marginTop: "12px",
}));
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DashboardTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="tabBox">
        <Tabs
          sx={{ gap: "5px" }}
          className="buttonTab"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{backgroundColor:value===0 ? 'white' : 'inherit'}} label="OverView" {...a11yProps(0)} />
          <Tab sx={{backgroundColor:value===1 ? 'white' : 'inherit'}} label="Products" {...a11yProps(1)} />
          <Tab sx={{backgroundColor:value===2 ? 'white' : 'inherit'}} label="SEO Analysis" {...a11yProps(2)} />
        </Tabs>
        <TabSpan>Coming Soon</TabSpan>
      </Box>
      {/* <span>Coming soon</span> */}
      <TabPanel value={value} index={0}>
        <OverView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
