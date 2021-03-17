import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.png'
import { Button } from "@material-ui/core";

function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "5em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em"
        },
    },
    logo: {
        height: "9em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        },
    },
    tabContaier: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '15px'       
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        color: "#fdbc7d",
        marginLeft: "auto",
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
        opacity: "90%"
    },
    drawerItem: {
        ...theme.typography.tab,
        color: theme.palette.common.orange,
        opacity: 0.7        
    },
    drawerItemSelected: {
        opacity: 1,
        color: theme.palette.common.red

    }
    

}))
 

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [openDrawer, SetOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
         setValue(0); 
        } else if (window.location.pathname === "/photos" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/location" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/riders" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/slogan" && value !== 4) {
            setValue(4);
        }
    }, [value]);

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange}
                className={classes.tabContaier}>
                    <Tab className={classes.tab} component={Link} to="/" label="Home" />
                    <Tab className={classes.tab} component={Link} to="/photos" label="Photos" />
                    <Tab className={classes.tab} component={Link} to="/location" label="Location" />
                    <Tab className={classes.tab} component={Link} to="/riders" label="Riders" />
                    <Tab className={classes.tab} component={Link} to="/slogan" label="Slogan contest" />
            </Tabs>
        </React.Fragment>

    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} 
                onClose={() => SetOpenDrawer(false)} onOpen={() => SetOpenDrawer(true)}
                classes={{paper: classes.drawer}} >
                    <List disablePadding>
                        <ListItem onClick={() => {SetOpenDrawer(false); setValue(0)}} divider button component={Link} to="/" selected={value === 0}>
                            <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem } disableTypography>Home</ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {SetOpenDrawer(false); setValue(1)}} divider button component={Link} to="/photos" selected={value === 1}>
                            <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem } disableTypography>Photos</ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {SetOpenDrawer(false); setValue(2)}} divider button component={Link} to="/location" selected={value === 2}>
                            <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem } disableTypography>Location</ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {SetOpenDrawer(false); setValue(3)}} divider button component={Link} to="/Riders" selected={value === 3}>
                            <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem } disableTypography>Riders</ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {SetOpenDrawer(false); setValue(4)}} divider button component={Link} to="/slogan" selected={value === 4}>
                            <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem } disableTypography>Slogan Contest</ListItemText>
                        </ListItem>
                    </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => SetOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary'>
                    <Toolbar disableGutters={false}>
                        <Button component={Link} to="/" disableRipple onClick={() => setValue(0)}>
                            <img alt="logo" className={classes.logo} src={logo} />
                        </Button >
                        {matches ? drawer  : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
        

    );

}