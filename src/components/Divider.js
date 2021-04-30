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

export default function Divider({ styles }) {
	const classes = useStyles();

	return <div style={styles} className={classes.divider}></div>;
}
