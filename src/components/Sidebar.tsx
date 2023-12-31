import React, {useState, useEffect} from "react";
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
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettings,
  TrendingUpOutlined,
  PieChartOutlined,
  AdminPanelSettingsOutlined, 
  Queue,
  GroupAdd,
  PersonAddAlt,
  CarRental,
  DirectionsCar,
  Announcement
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from '../assets/profile.png'
import { User } from "../@types/types";
import { ThemeOptions } from "../@types/pallette";
import ListItemComponent from "../@core/list-items/ListItemComponent";
interface Props {

    drawerWidth:string;
    isSideBarOpen:boolean;
    isNoneMobile:boolean;
    setIsSideBarOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const authItems = [
   

   
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];

  const createItems= [ {
    text: "Create",
    icon: null,
  },
  {
    text: "Owner",
    icon: <GroupAdd/>,
  },
  {
    text: "Driver",
    icon: <PersonAddAlt />,
  },
  // {
  //   text: "Vehicle",
  //   icon: <CalendarMonthOutlined />,
  // },
  {
    text: "Complaint",
    icon: <Queue />,
  },];
  const viewItems =[ {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "View",
    icon: null,
  },
  {
    text: "Drivers",
    icon: <CarRental />,
  },
  {
    text: "Vehicles",
    icon: <DirectionsCar />,
  },
  {
    text: "Complaints",
    icon: <Announcement />,
  },];
  
const Sidebar = ({drawerWidth, isSideBarOpen, setIsSideBarOpen, isNoneMobile}:Props) => {

    const {pathname } = useLocation();
    //to determine the path we are on
    const [ active, setActive] = useState("")

    const navigate = useNavigate()

    const theme = useTheme() as ThemeOptions;

    //everytime we have the pathname changing we are going to set the active value to the active page we are on
    useEffect(()=>{
        setActive(pathname.substring(1))
    },[pathname])



  return(
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNoneMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    MOMBASA
                  </Typography>
                </Box>
                {!isNoneMobile && (
                  <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <Divider />
            <List>
              {viewItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography variant="h3" key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = `view${text.toLowerCase()}`;

                return (
                 <ListItemComponent  key={text} lcText={lcText} text={text} icon={icon} active={active} setActive={setActive}/>
                );
              })}
            </List>
          
            <Divider />
            <List>
              {createItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography variant="h3" key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = `${text.toLowerCase()}`;

                return (
                 <ListItemComponent key={text} lcText={lcText} text={text} icon={icon} active={active} setActive={setActive}/>
                );
              })}
            </List>
            <Divider />
            <List>
              {authItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography variant="h3" key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = `/`;

                return (
                 <ListItemComponent key={text}  lcText={lcText} text={text} icon={icon} active={active} setActive={setActive}/>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="-15rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                name
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                occupation
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  )
};

export default Sidebar;
