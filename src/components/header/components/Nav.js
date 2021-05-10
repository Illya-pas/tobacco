import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import CustomButton from "../../menuItems/CustomButton";
import { colors } from "../../../theme/colors";
import clsx from "clsx";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuBurger from "./MenuBurger";

const useStyles = makeStyles({
	nav: {
		display: "flex",
		borderRight: `1px solid ${colors.secondary}`,
		"@media (max-width: 1300px)": {
			borderRight: "none",
		},
		"@media (max-width: 870px)": {
			flexDirection: "column",
			position: "fixed",
			top: 60,
			right: 0,
			border: `1px solid ${colors.secondary}`,
		},
	},
	disabledNav: {
		display: "none",
	},
	active: {
		"& button": {
			border: `5px solid ${colors.secondary}`,
		},
	},
});

export default function Nav({ headerHeight, activeNav, setActiveNav }) {
	const classes = useStyles();

	const [buttons, setButtons] = useState([
		{
			name: "Головна",
			link: "/",
		},
		{
			name: "Про Нас",
			link: "/about",
		},
		{
			name: "Контакти",
			link: "/contacts",
		},
		{
			name: "Відгуки",
			link: "/feedbacks",
		},
	]);

	let buttonStyles = {
		fontWeight: 700,
		fontSize: 25,
		height: headerHeight,
		width: 140,
		fontFamily: "Open Sans Condensed",
	};

	return (
		<ClickAwayListener
			onClickAway={() => {
				window.innerWidth < 870 ? setActiveNav(false) : null;
			}}
		>
			<div>
				<MenuBurger activeNav={activeNav} setActiveNav={setActiveNav} />
				<nav className={clsx(classes.nav, !activeNav && classes.disabledNav)}>
					{buttons.map((button, index) => (
						<NavLink
							exact
							activeClassName={classes.active}
							key={index}
							to={button.link}
						>
							<CustomButton
								primary={colors.primary}
								secondary={colors.secondary}
								text={button.name}
								styles={buttonStyles}
							/>
						</NavLink>
					))}
				</nav>
			</div>
		</ClickAwayListener>
	);
}
