import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton, Button, CardActions } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import SimpleCard from './Components/SimpleCard'
import SimpleTable from './Components/SimpleTable'

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
    height: 200,
    width: "100%",
    top: 0,
    //background: "#7159C1"
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
});

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      {
        SimpleCard({
          title: "Problema",
          subtitle: null,
          body: "Dado um triângulo de números, encontre o total máximo de cima para baixo."
        })
      }
      {
        SimpleCard({
          title: "Solução",
          subtitle: null,
          body: null
        })
      }
      {
        SimpleCard({
          title: "Resultados",
          subtitle: null,
          body: null
        }, () => SimpleTable())
      }
      <Grid item xs={12}>
        <Card className={classes.card}>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(App);
