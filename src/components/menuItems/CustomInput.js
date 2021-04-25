import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import clsx from "clsx";

const useStyles = makeStyles((props) => ({
	input: {
		display: "flex",
		width: "fit-content",
		fontSize: 25,
		fontWeight: 300,
		padding: 10,
		color: colors.blackGrey,
		width: 180,
		transition: "width .3s",
		"&::placeholder": {
			color: colors.blackGrey,
		},
	},
	focused: {
		"&:focus": {
			width: 280,
			transition: "width .3s",
		},
	},
}));

export default function CustomInput({ text, styles, rubber }) {
	const [props, setProps] = useState({});

	const classes = useStyles(props);

	return (
		<input
			type="text"
			className={clsx(classes.input, rubber && classes.focused)}
			style={styles}
			placeholder={text}
		/>
	);
}
