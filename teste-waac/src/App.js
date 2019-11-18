import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton, Button, CardActions } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import SimpleCard from './components/SimpleCard'
import SimpleTable from './components/SimpleTable'
import SolutionCardBody from './components/SolutionCardBody'

const styles = () => ({
  root: {
    padding: "50px 100px",
    zIndex: 999,
    position: "absolute",
    background: "#15A8AC",
  },
  card: {
    display: "flex",
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
  },
  rightContainer: {
    background:
      "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
    flex: 1
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    background: "#9de1fe",
    padding: 20
  },
  information: {
    color: "#444"
  },
  gridRow: {
    flexDirection: 'row',
  },
});

const output = null

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container spacing={6} className={classes.root}>
      <Grid item xs={6}>
        {
          SimpleCard({
            title: "Problema",
            body: "Dado um triângulo de números, encontre o total máximo de cima para baixo."
          }, () => {
            return (
              <Typography variant="body2" component="p" >
                <br/>
                Exemplo:<br/>
                Input: [[6],[3,5],[9,7,1],[4,6,8,4]]<br/>
                Output: 26
              </Typography>
            )
          })
        }
      </Grid>
      <Grid item xs={6}>
        {
          SimpleCard({
            title: "Solução",
            body: null
          }, () => SolutionCardBody({ output: output, }))
        }
      </Grid>
      <Grid item xs={12}>
        {
          SimpleCard({
            title: "Resultados",
            body: null
          }, () => SimpleTable())
        }
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(App);
