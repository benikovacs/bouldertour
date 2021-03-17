import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";


import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core';

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

        
        
    }

}))
 

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
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

    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary'>
                    <Toolbar disableGutters={false}>
                        <Button component={Link} to="/" disableRipple onClick={() => setValue(0)}>
                            <img alt="logo" className={classes.logo} src={logo} />
                        </Button >
                        {matches ? null  : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
        

    );

}