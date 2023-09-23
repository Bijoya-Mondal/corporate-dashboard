import React from "react";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNav =()=> {
    return(
        <Drawer  variant="permanent" anchor="left" sx={{flex:'0 0 auto', width:'270px'}}>
            <Paper elevation={0} >

                <List sx={{backgroundColor:'rgb(39, 24, 124)', color:'#FFFFFF'}}>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}} >
                                <GridViewIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Manage Subscription
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Young Brain
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Mid Career
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Vendor
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Consultant
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <GridViewIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Reports
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon sx={{color:'#FFFFFF'}}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Sign Out
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                </List>
            </Paper >
            </Drawer>
    )
}

export default SideNav;