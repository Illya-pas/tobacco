import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { addFilter, removeFilter } from "../../../redux/actions";

const useStyles = makeStyles({
  root: {
    marginTop: 12,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  filter: {
    marginLeft: 10,
    fontWeight: 300,
  },
  filterActive: {
    fontWeight: 400,
  },
  checkbox: {
    minWidth: 20,
    minHeight: 20,
    border: `1px solid ${colors.secondary}`,
    borderRadius: 5,
  },
  checkboxActive: {
    backgroundColor: colors.secondary,
  },
});

export default function CatalogFilter({ filterName }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeFilters = useSelector((state) => state.cards.filters);

  useEffect(() => {
    activeFilters.map((activeFilter, index) => {
      if (activeFilter === filterName) {
        setCurrentIndex(index);
        setSelectedFilter(true);
      }
    });
  }, [activeFilters]);

  const handleSelect = (name) => {
    setSelectedFilter(!selectedFilter);
    !selectedFilter
      ? dispatch(addFilter(name))
      : dispatch(removeFilter(currentIndex));
  };

  return (
    <div onClick={() => handleSelect(filterName)} className={classes.root}>
      <span
        className={clsx(
          classes.checkbox,
          selectedFilter && classes.checkboxActive
        )}
      ></span>
      <h4
        className={clsx(classes.filter, selectedFilter && classes.filterActive)}
      >
        {filterName}
      </h4>
    </div>
  );
}
