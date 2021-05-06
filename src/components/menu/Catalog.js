import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { colors } from "../../theme/colors";
import { useSelector } from "react-redux";
import CatalogClass from "./components/CatalogClass";
import { menuItems } from "./components/Filters";

const useStyles = makeStyles((menuWidth) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flexGrow: 1,
    maxWidth: (menuWidth) => menuWidth,
    transition: ".2s",
    "@media (max-width: 870px)": {
      position: "fixed",
      zIndex: 10,
      height: "100%",
      top: 60,
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: (menuWidth) => menuWidth,
    transition: ".2s",
  },
  drawerPaper: {
    padding: 13,
    width: (menuWidth) => menuWidth,
    transition: ".2s",
    borderRight: `1px solid ${colors.secondary}`,
    position: "absolute",
    "&::-webkit-scrollbar": {
      width: 5,
      height: 0,
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: colors.blackGrey,
      borderRadius: "10px",
    },
  },
}));

export default function Catalog() {
  const menuWidth = useSelector((state) => state.app.menuWidth);
  const currentPath = useSelector((state) => state.app.location);
  const classes = useStyles(menuWidth);

  return currentPath === "/order" ? null : (
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
          {menuItems.map((menuItem, index) => (
            <CatalogClass index={index} key={index} menuItem={menuItem} />
          ))}
        </List>
      </Drawer>
    </div>
  );
}
