import React from 'react';

import Timerapp from './Timerapp';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 500,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));

export default function OutlinedCard() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <React.Fragment>
          <CssBaseline />
          <Container fixed>
          <Paper className={classes.paper}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              Countdown until the race starts
              </Typography>
              <Typography variant="h3" component="h3">
              <Timerapp />
              </Typography>
            </CardContent>
          </Paper>
          </Container>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}