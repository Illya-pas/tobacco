import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "../menuItems/CustomInput";
import Nav from "./components/Nav";
import Cart from "../cart/Cart";
import searchIcon from "../../theme/images/search.svg";
import { colors } from "../../theme/colors";
import CustomButton from "../menuItems/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { changeWidthMenu } from "../../redux/actions";

const headerHeight = 60;

// Breakpoints: 1300, 780

const useStyles = makeStyles({
	header: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		borderTop: `1px solid ${colors.secondary}`,
		borderBottom: `1px solid ${colors.secondary}`,
	},
	container: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		maxWidth: 2000,
		"@media (max-width: 1300px)": {
			flexDirection: "column",
		},
	},
	headerPart: {
		display: "flex",
		"&:last-child": {
			width: "100%",
			justifyContent: "space-between",
			"@media (max-width: 1300px)": {
				borderTop: `1px solid ${colors.secondary}`,
			},
		},
	},
	search: {
		flexGrow: 1,
		padding: "0 10px 0 25px",
		display: "flex",
		alignItems: "center",
		borderRight: `1px solid ${colors.secondary}`,
		"& img": {
			cursor: "pointer",
			height: 35,
		},
	},
	cart: {
		padding: "5px 42px 5px 20px",
	},
});

export default function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const menuWidth = useSelector((state) => state.app.menuWidth);

	const openMenu = () => {
		dispatch(changeWidthMenu(220));
	};
	const closeMenu = () => {
		dispatch(changeWidthMenu(0));
	};

	let buttonStyles = {
		fontWeight: 700,
		fontSize: 25,
		minWidth: 220,
		height: headerHeight,
		fontFamily: "Open Sans Condensed",
	};

	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={classes.headerPart}>
					<CustomButton
						primary={colors.secondary}
						secondary={colors.primary}
						text="Каталог"
						action={menuWidth ? closeMenu : openMenu}
						styles={buttonStyles}
						enabled={false}
					/>
					<Nav headerHeight={headerHeight} />
				</div>

				<div className={classes.headerPart}>
					<span className={classes.search}>
						<CustomInput rubber={true} text="Пошук товарів" />
						<img src={searchIcon} alt="search" />
					</span>
					<div className={classes.cart}>
						<Cart />
					</div>
				</div>
			</div>
		</header>
	);
}
