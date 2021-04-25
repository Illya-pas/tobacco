import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { colors } from "../../theme/colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((menuWidth) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flexGrow: 1,
    maxWidth: (menuWidth) => menuWidth,
    transition: ".2s",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: (menuWidth) => menuWidth,
    transition: ".2s",
  },
  drawerPaper: {
    width: (menuWidth) => menuWidth,
    transition: ".2s",
    borderRight: `1px solid ${colors.secondary}`,
    position: "absolute",
  },
}));

export default function Catalog() {
  const menuWidth = useSelector((state) => state.app.menuWidth);
  const classes = useStyles(menuWidth);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={Boolean(menuWidth)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {["Табак", "Витратники", "Сигари", "Аксесуари"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
