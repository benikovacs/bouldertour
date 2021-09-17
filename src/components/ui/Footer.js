import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import footerAdornment from '../../assets/footer.png';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        color: theme.palette.common.orange,
        zIndex: 1302,
        position: "fixed",
        bottom: '0px'
        
    },
    adornment: {
        width: '25em',
        [theme.breakpoints.down("md")]: {
            width: "15em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "13em"
        },
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        fontFamily: "Arial",
        fontWeight: "thin",
        fontSize: "1rem",
        color: theme.palette.common.orange,
        textDecoration: "none",
        [theme.breakpoints.down("md")]: {
            fontSize: "0.75rem"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.75rem"
        },
    },
    gridItem: {
        margin: "1em",
        [theme.breakpoints.down("md")]: {
            margin: "0.2em"
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0.1em"
        },
    }


}))


export default function Footer(props) {
    const classes = useStyles()

    return (<footer className={classes.footer}>
        <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={1}>
                    <Grid item component={Link} onClick={() => props.setValue(0)} to ="/" className={classes.link}>
                    Home
                    </Grid>
                    <Grid item component={Link} onClick={() => props.setValue(1)} to ="/photos" className={classes.link}>
                    Photos
                    </Grid>
                    <Grid item component={Link} onClick={() => props.setValue(2)} to ="/location" className={classes.link}>
                    Location
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={1}>
                    <Grid item component={Link} onClick={() => props.setValue(3)} to ="/riders" className={classes.link}>
                    Riders
                    </Grid>
                    <Grid item component={Link} onClick={() => props.setValue(4)} to ="/slogan" className={classes.link}>
                    Slogan contest
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <img alt="mountains" src={footerAdornment} className={classes.adornment}/></footer>
    );
}