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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    padding: "2px 10px 2px 10px",
    backgroundColor: " rgba(73, 111, 254, 0.08)",
    color: "#242424",
    fontWeight: "500",
    fontSize: 14,

    borderRadius: "6px",
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

  // hide last border
  "&:last-child td, &:last-child th": {
    backgroundColor: "#FFFFFF",
    border: 0,
  },
}));

function createData(
  image: any,
  name: string,
  avg_price: number,
  revenue: number
) {
  return { image, name, avg_price, revenue };
}

const rows = [
  createData(TableImg.img1, "Forged Ember", 6.0, 24),
  createData(TableImg.img2, "Forged Ember", 9.0, 37),
  createData(TableImg.img3, "Forged Ember", 16.0, 24),
  createData(TableImg.img4, "Forged Ember", 3.7, 67),
  createData(TableImg.img1, "Forged Ember", 16.0, 49),
];

export default function TopSellingTable() {
  return (
    <Box
      sx={{ padding: "2%", borderRadius: "10px", border: " 2px solid #E6EFFB" }}
    >
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500, boxShadow:'none' }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
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
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">
                  <img
                    alt="product-img"
                    height={"50px"}
                    width={"50px"}
                    src={row.image}
                  />
                </StyledTableCell>

                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.avg_price}
                </StyledTableCell>
                <StyledTableCell align="center">{row.revenue}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
