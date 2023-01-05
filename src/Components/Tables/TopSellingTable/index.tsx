import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableImg } from "../../../Assets";
import { Box } from "@mui/system";
import "./TopSellingTable.scss";
import '../../../Assets/Fonts/Inter/Inter.css'
import {Typography} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    padding: "2px 10px 2px 10px",
    color: "#242424",
    fontWeight: "500",
    fontSize: 14,
    borderStyle: "none",
    height: "26px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    borderStyle: "none",   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  marginBottom:'100px',
  // hide last border
  "&:last-child td, &:last-child th": {
    backgroundColor: "#FFFFFF",
    border: 0,
  },
}));

function createData(
  image: any,
  name: string,
  avg_price: string,
  revenue: string
) {
  return { image, name, avg_price, revenue };
}

const rows = [
  createData(TableImg.img1, "Forged Ember", '$120.0 - $130.0', '$1124.00'),
  createData(TableImg.img2, "Forged Ember", '$120.0 - $130.0', '$1137.00'),
  createData(TableImg.img3, "Forged Ember", '$120.0 - $130.0', '$1124.00'),
  createData(TableImg.img4, "Forged Ember", '$120.0 - $130.0', '$1167.00'),
  createData(TableImg.img1, "Forged Ember", '$120.0 - $130.0', '$1149.00'),
];

export default function TopSellingTable() {
  return (
    <Box
      sx={{ padding: "2%", borderRadius: "10px", border: "2px solid #E6EFFB" }}
    >
      <TableContainer component={Paper} className="TableWrapper">
        <Table
          sx={{
            minWidth: 400,
            boxShadow: "none",
          }}
          aria-label="customized table"
        >
          <TableHead >
            <TableRow sx={{backgroundColor: " rgba(73, 111, 254, 0.08)",borderRadius:'6px' }} >
              <StyledTableCell sx={{ width: "10%" }}>Image</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }} align="left">
                Name
              </StyledTableCell>
              <StyledTableCell align="center">Avg. Price</StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }} align="center">
                Revenue
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <div style={{marginTop:10}} />
          <TableBody style={{marginTop:30}} className="table-container" >
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className="table-cell"  align="left">
                  <img
                    alt="product-img"
                    height={"50px"}
                    width={"50px"}
                    src={row.image}
                  />
                </StyledTableCell>

                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="h3" color='#7B7F91' fontWeight={500} >
                    {row.avg_price}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant='h3' color='#496FFE' fontWeight={500} >
                  {row.revenue}
                  </Typography>
                  </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
