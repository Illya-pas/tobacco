import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((props) => ({
	button: {
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "fit-content",
		padding: 5,
		color: (props) => props.color,
		backgroundColor: (props) => props.backgroundColor + " !important",
	},
}));

export default function CustomButton({
	primary,
	secondary,
	text,
	action,
	styles,
	enabled,
	open,
}) {
	let props = {
		color: secondary,
		backgroundColor: primary,
	};

	const classes = useStyles(props);

	return (
		<button className={classes.button} onClick={action} style={styles}>
			{text}
		</button>
	);
}
