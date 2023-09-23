import React from "react";
import Box from '@mui/material/Box';
import SideNav from "./SideNav";
import DashBoard from "./DashBoard";




const MainPage =() => {

    return(
        <Box sx={{display: 'flex'}}>

            <SideNav />

            <DashBoard />

            
        </Box>
    )
}

export default MainPage;