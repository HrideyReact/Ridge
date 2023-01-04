import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OverViewCard from "./OverViewCards";
import GraphChart from "../GraphCharts";
import { Typography } from "@mui/material";
import TopSellingTable from "../Tables/TopSellingTable";

const OverView = () => {
  const [selectedCategory, setSelectedCategory] = useState("Yesterday");

  return (
    <Box>
      {/* Dropdown to select time of data */}
      <FormControl>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            padding: 0,
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            ".MuiSelect-select": { paddingRight: "32px" },
          }}
          value={selectedCategory}
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
        >
          <MenuItem value="Yesterday">Yesterday</MenuItem>
          <MenuItem value={"Today"}>Today</MenuItem>
        </Select>
      </FormControl>
      <OverViewCard />
      <Box width={"50%"} height="200px" mt="40px">
        <Typography color="primary" variant="h2" mb="8px">
          Revenue Over Time
        </Typography>
        <GraphChart />
        <Typography color="primary" variant="h2" mt="10px" mb="8px">
          Top selling Products
        </Typography>
        <TopSellingTable />
      </Box>
    </Box>
  );
};

export { OverView };
