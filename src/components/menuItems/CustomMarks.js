import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import clsx from "clsx";

const useStyles = makeStyles({
	markItems: {
		display: "flex",
		marginLeft: -15,
	},
	mark: {
		marginLeft: 15,
		width: 35,
		height: 35,
		border: `1px solid ${colors.secondary}`,
		borderRadius: "50%",
		cursor: "pointer",
	},
	activeMark: {
		backgroundColor: "yellow",
		border: "none",
	},
});

export default function CustomMarks({ activeMarks, setActiveMarks }) {
	const classes = useStyles();

	let marks = [1, 2, 3, 4, 5];

	const changeActiveMarks = (num) => {
		setActiveMarks(num);
	};

	return (
		<div className={classes.markItems}>
			{marks.map((marksItem) => (
				<span
					key={marksItem}
					id={marksItem}
					className={clsx(
						classes.mark,
						marksItem <= activeMarks && classes.activeMark
					)}
					onClick={(e) => changeActiveMarks(e.target.id)}
				></span>
			))}
		</div>
	);
}
