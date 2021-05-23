import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../theme/colors";
import CatalogFilter from "./CatalogFilter";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  filterClass: {
    fontSize: 18,
    transition: ".3s",
    "& h2": {
      fontSize: 25,
      margin: "25px 0 0 0",
      fontWeight: 600,
      cursor: "pointer",
    },
    "& h3": {
      margin: "25px 0 25px 0",
      cursor: "default",
    },
  },
});

export default function CatalogClass({ menuItem, index }) {
  const classes = useStyles();
  const [activeClass, setActiveClass] = useState(false);
  const history = useHistory();

  const handleActiveClass = (classPath) => {
    setActiveClass(!activeClass);
    !activeClass && history.push(`/items/${classPath}`);
  };

  return (
    <div className={classes.filterClass}>
      {index === 0 ? (
        <h2
          style={{ marginTop: 0 }}
          onClick={() => handleActiveClass(menuItem.path)}
        >
          {menuItem.name}
        </h2>
      ) : (
        <h2 onClick={() => handleActiveClass(menuItem.path)}>
          {menuItem.name}
        </h2>
      )}
      {activeClass &&
        menuItem.filters.map((filter, index) => (
          <div key={index} className={classes.filtersList}>
            <CatalogFilter filterName={filter} filterType={menuItem.path} />
          </div>
        ))}
    </div>
  );
}
