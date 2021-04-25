import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme/colors";

const useStyles = makeStyles({
	divider: {
		height: 1,
		width: "100%",
		backgroundColor: colors.secondary,
	},
});

export default function Divider() {
	const classes = useStyles();

	return <div className={classes.divider}></div>;
}
