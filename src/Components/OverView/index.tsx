import { useState } from "react";
import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OverViewCard from "./OverViewCards";
import GraphChart from "../GraphCharts";
import { Typography } from "@mui/material";
import TopSellingTable from "../Tables/TopSellingTable";
import { TableImg } from "../../Assets";
import { OverViewSideTable } from "../Tables/SideTable";

const OverView = () => {
  const [selectedCategory, setSelectedCategory] = useState("Yesterday");

  const StyledBox = styled("div")(({ theme }) => ({
    width: "100% !important",
    height: "max-content",
    display: "flex",
    gap: "2%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));
  const StyledLeftContainer = styled("div")(({ theme }) => ({
    width: "65% !important",
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));
  const StyledRightContainer = styled("div")(({ theme }) => ({
    width: "45% !important",
    display: "flex",
    padding: "0px 15px 0px 15px",

    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));
  const SeeAllSpan = styled("span")(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
  }));
  const ArrowImgSpan = styled("span")(({ theme }) => ({
    marginLeft: "5px",
    cursor: "pointer",
  }));

  return (
    <Box width="100%">
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
      <StyledBox>
        <StyledLeftContainer>
          <Box width={"100%"} height="200px" mt="40px">
            <Typography color="primary" variant="h2" mb="8px">
              Revenue Over Time
            </Typography>
            <GraphChart />
            <Box width="100%" sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "70%" }}
                color="primary"
                variant="h2"
                mt="10px"
                mb="8px"
              >
                Top selling Products{" "}
              </Typography>
              <Box width="30%" paddingTop={1} textAlign="right">
                <SeeAllSpan style={{ margin: 0 }}>See all</SeeAllSpan>
                <ArrowImgSpan>
                  <img alt="arrow" src={TableImg.SeeAll} />
                </ArrowImgSpan>
              </Box>
            </Box>
            <TopSellingTable />
          </Box>
        </StyledLeftContainer>
        <StyledRightContainer>
          <Box width={"100%"} mt="40px">
            <Box width="100%" sx={{ display: "flex" }}>
              <Typography
                color="primary"
                variant="h2"
                mt="10px"
                mb="8px"
                sx={{ width: "70%" }}
              >
                Recent Sales
              </Typography>
              <Box width="30%" paddingTop={1} textAlign="right">
                <SeeAllSpan style={{ margin: 0 }}>See all</SeeAllSpan>
                <ArrowImgSpan>
                  <img alt="arrow" src={TableImg.SeeAll} />
                </ArrowImgSpan>
              </Box>
            </Box>
            <OverViewSideTable />
          </Box>
        </StyledRightContainer>
      </StyledBox>
    </Box>
  );
};

export { OverView };
