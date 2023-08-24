import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useGetUserQuery } from "../../store/api";
import { useAppSelector } from "../../store/hooks";

const Layout = () => {
  const isNoneMobile: boolean = useMediaQuery("(min-width: 600px)");

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


  const userId = useAppSelector((state)=>state.mode.userId) 
  





  return (
    <Box display={isNoneMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
      
        isNoneMobile={isNoneMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box flexGrow={1}>
        <Navbar   
       
         isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
