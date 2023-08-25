import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeOptions } from "../../@types/pallette";
import { ChevronRightOutlined } from "@mui/icons-material";


interface Props {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  text:string;
  lcText:string;
  active:string;
  icon: JSX.Element;
}

const ListItemComponent = ({setActive, text, lcText, active, icon}:Props) => {

    const navigate = useNavigate()
    const theme = useTheme() as ThemeOptions;
  return (
    <ListItem key={text} disablePadding>
    <ListItemButton
      onClick={() => {
        navigate(`/${lcText}`);
        setActive(lcText);
      }}
      sx={{
        backgroundColor:
          active === lcText
            ? theme.palette.secondary[300]
            : "transparent",
        color:
          active === lcText
            ? theme.palette.primary[600]
            : theme.palette.secondary[100],
      }}
    >
      <ListItemIcon
        sx={{
          ml: "2rem",
          color:
            active === lcText
              ? theme.palette.primary[600]
              : theme.palette.secondary[200],
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {active === lcText && (
        <ChevronRightOutlined sx={{ ml: "auto" }} />
      )}
    </ListItemButton>
  </ListItem>
  )
}

export default ListItemComponent