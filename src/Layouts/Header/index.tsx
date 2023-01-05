import { IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Images } from "../../Assets";

const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    width: "400px !important",
    height: "47px !important",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#E6EFFB",
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    top: "5px",
    padding: "5px",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      width: "370px !important",
      height: "48px !important",
      //   padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,

      fontSize: "12px",
      borderRadius: "10px",
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const StyledIconContainer = styled("div")(({ theme }) => ({
    // color: "inherit",
    "&": {
      position: `absolute`,
      right: 30,
      display: "flex",
    },
  }));

  return (
    <Box>
      <Toolbar sx={{ width: "100%", display: "flex", padding: "1% 0 2% 0" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon
              sx={{ width: "1.5rem", height: "1.5rem", color: "grey" }}
            />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <StyledIconContainer>
          <IconButton>
            <img
              alt="notification-icon"
              height={"42px"}
              src={Images.NotificationIcon}
            />
          </IconButton>
          <IconButton>
            <img alt="info-icon" height={"42px"} src={Images.UserInfo} />
          </IconButton>
        </StyledIconContainer>
      </Toolbar>
    </Box>
  );
};

export default Header;
