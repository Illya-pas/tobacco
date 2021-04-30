import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import clsx from "clsx";

const useStyles = makeStyles({
	input: {
		display: "flex",
		width: "fit-content",
		fontWeight: 300,
		padding: 10,
		color: colors.blackGrey,
		width: "100%",
		transition: "width .3s",
		"&::placeholder": {
			color: colors.blackGrey,
		},
	},
	focused: {
		"&:focus": {
			maxWidth: 280,
			transition: "width .3s",
		},
	},
});

export default function ControlInput({
	name,
	text,
	styles,
	Controller,
	control,
	rubber,
}) {
	const classes = useStyles();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => (
				<input
					style={styles}
					className={clsx(classes.input, rubber && classes.focused)}
					placeholder={text}
					{...field}
				/>
			)}
		/>
	);
}
