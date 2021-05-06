import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../theme/colors";
import CatalogFilter from "./CatalogFilter";

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

  const handleActiveClass = () => {
    setActiveClass(!activeClass);
  };

  return (
    <div className={classes.filterClass}>
      {index === 0 ? (
        <h2 style={{ marginTop: 0 }} onClick={handleActiveClass}>
          {menuItem.name}
        </h2>
      ) : (
        <h2 onClick={handleActiveClass}>{menuItem.name}</h2>
      )}
      {activeClass &&
        menuItem.subMenu.map((filterClasses, index) => (
          <div key={index} className={classes.filtersList}>
            <h3>{filterClasses.subName}</h3>
            {filterClasses.subList.map((filterItem, index) => (
              <CatalogFilter key={index} filterName={filterItem} />
            ))}
          </div>
        ))}
    </div>
  );
}
