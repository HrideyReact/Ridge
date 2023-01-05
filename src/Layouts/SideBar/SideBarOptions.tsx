import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./sidebar.scss";
import { Images } from "../../Assets";
import { useNavigate } from "react-router-dom";

type OptionProps = {
  open: boolean;
};

const SideBarOptions = ({ open }: OptionProps) => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  const sideBarOptions: { icon: string; label: string; path: string }[] = [
    {
      icon: Images.Home,
      label: "Home",
      path: "/",
    },
    {
      icon: Images.ProductsIcon,
      label: "Products",
      path: "/products",
    },
    {
      icon: Images.SeoIcon,
      label: "SEO Analysis",
      path: "/seoanalysis",
    },
  ];
  return (
    <List>
      {sideBarOptions.map((item, index) => {
        const active = path.toUpperCase() === item.path.toUpperCase();
        return (
          <ListItem
            key={index}
            disablePadding
            sx={{
              padding: "5px 16px 5px 16px",
              display: "block",
            }}
            onClick={() => navigate(item.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                // px: 2.5,
                padding: "0px 0px 0px 5px",
                borderRadius: "6px",
                backgroundColor: active ? "rgba(255, 255, 255, 0.3)" : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  alt={"item-icon"}
                  height={"24px"}
                  width={"24px"}
                  src={item.icon}
                  className={active ? "ActiveTab" : ""}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  opacity: open ? 1 : 0,
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
export default SideBarOptions;
