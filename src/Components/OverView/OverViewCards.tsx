import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardData } from "../../Utils/overViewJson/cardData";
import styled from "@emotion/styled";
import Image from "mui-image";

export default function OverViewCard() {
  const CardContainer = styled("div")(({ theme }) => ({
    width: "100%",
    paddingTop: "15px",
    display: "grid",
    gridTemplateColumns: " repeat(6, 15.5%)",
    gap: "15px",
  }));
  return (
    <CardContainer>
      {CardData.map((val) => {
        return (
          <Card
            sx={{
              width: "100%",
              borderRadius: "15px",
              backgroundColor: "rgba(73, 111, 254, 0.08)",
            }}
          >
            <CardContent >
              <Image height="2" width="24px" src={val.icon} />

              <Typography
                sx={{
                  mb: 1.5,
                  width: "max-content",
                  position: "absolute",
                  marginLeft: "2.5%",
                  fontSize: "12px",
                  marginTop: "-1.5%",
                  fontWeight: "500",
                  color: "#242424",
                }}
              >
                {val.label}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  // padding: "2px 0px 2px 10px ",
                  marginTop: "5%",
                  fontWeight: "1000",
                }}
              >
                {val.value}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </CardContainer>
  );
}
