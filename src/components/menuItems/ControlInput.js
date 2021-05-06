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
		transition: "max-width .3s",
		"&::placeholder": {
			color: colors.blackGrey,
		},
	},
	focused: {
		maxWidth: "280px !important",
		transition: "max-width .3s",
	},
});

export default function ControlInput({
	name,
	text,
	styles,
	Controller,
	control,
	searchFocused,
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
					className={clsx(classes.input, searchFocused && classes.focused)}
					placeholder={text}
					{...field}
				/>
			)}
		/>
	);
}
