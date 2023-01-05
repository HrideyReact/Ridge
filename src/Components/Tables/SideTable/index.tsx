import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { SideTable } from "../../../Utils/overViewJson/cardData";
import { Typography } from "@mui/material";

const OverViewSideTable = () => {
  const InfoCardContainer = styled("div")(({ theme }) => ({
    height: "80px",
    width: "100%",
    display: "flex",
  }));
  const InfoCardImage = styled("img")(({ theme }) => ({
    height: "52px",
    width: "52px",
    marginTop: "16px",
  }));
  const InfoCardLabel = styled("div")(({ theme }) => ({
    fontWeight: "500 !important",
    marginTop: "16px",
    height: "max-content",
    marginLeft: "8px",
    fontSize: "16px",
    lineHeight: "28px",
    color: "#242424",
  }));
  const InfoCardDetail = styled("div")(({ theme }) => ({
    fontWeight: "500 !important",
    marginLeft: "8px",
    height: "max-content",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7B7F91",
  }));
  const InfoCardAmount = styled("div")(({ theme }) => ({
    fontWeight: "500 !important",
    width: "20%",
    marginTop: "46px",
    fontSize: "14px",
    color: "#496FFE",
    height: "max-content",
    fontStyle: "normal",
    textAlign: "right",
  }));
  return (
    <Box
      sx={{
        width: "100%",
        height: "680px",
        padding: "10px",
        overflow: "scroll",
        border: "2px solid #E6EFFB",
        borderRadius: "10px",
      }}
    >
      {SideTable.map((val) => {
        return (
          <InfoCardContainer>
            <InfoCardImage src={val.img} />
            <div
              style={{ display: "flex", flexDirection: "column", width: "80%" }}
            >
              <InfoCardLabel>
                <Typography>{val.label}</Typography>
              </InfoCardLabel>
              <InfoCardDetail>
                <Typography variant="h3">{val.detail}</Typography>
              </InfoCardDetail>
            </div>

            <InfoCardAmount>
              {" "}
              <Typography variant="h3">{val.value}</Typography>{" "}
            </InfoCardAmount>
          </InfoCardContainer>
        );
      })}
    </Box>
  );
};

export { OverViewSideTable };
