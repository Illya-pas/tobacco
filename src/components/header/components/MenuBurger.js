import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../theme/colors";
import clsx from "clsx";

const useStyles = makeStyles({
	burger: {
		cursor: "pointer",
		position: "fixed",
		right: 0,
		display: "flex",
		flexDirection: "column",
		width: 142,
		height: 60,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: colors.primary,
		display: "none",
		"@media (max-width: 870px)": {
			display: "flex",
		},
		"@media (max-width: 360px)": {
			width: 90,
		},
	},
	burgerLine: {
		width: 50,
		height: 8,
		backgroundColor: colors.secondary,
		borderRadius: "10px",
	},
	burgerActive: {
		backgroundColor: colors.secondary,
	},
	activeLine: {
		backgroundColor: colors.primary,
	},
});

export default function MenuBurger({ activeNav, setActiveNav }) {
	const classes = useStyles();

	const closeMenu = () => {
		setActiveNav(false);
	};

	const openMenu = () => {
		setActiveNav(true);
	};

	return (
		<div
			onClick={activeNav ? closeMenu : openMenu}
			className={clsx(classes.burger, activeNav && classes.burgerActive)}
		>
			<div
				className={clsx(classes.burgerLine, activeNav && classes.activeLine)}
			></div>
			<div
				className={clsx(classes.burgerLine, activeNav && classes.activeLine)}
			></div>
			<div
				className={clsx(classes.burgerLine, activeNav && classes.activeLine)}
			></div>
		</div>
	);
}
