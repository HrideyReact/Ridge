import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import "./OverViewCards.scss";
import Typography from "@mui/material/Typography";
import { CardData } from "../../../Utils/overViewJson/cardData";
import styled from "@emotion/styled";

export default function OverViewCard() {
  const CardContainer = styled("div")(({ theme }) => ({
    width: "100%",
    paddingTop: "15px",
    display: "grid",
    gridTemplateColumns: " repeat(6, 15%)",
    gap: "20px",
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
            <CardContent>
              <img alt={'card-icon'} height="24px" width="24px" src={val.icon} />

              <Typography className="labelContainer">{val.label}</Typography>
              <Typography
                variant="h6"
                style={{ padding: "1%", marginTop: "5%", fontWeight: "1000" }}
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
