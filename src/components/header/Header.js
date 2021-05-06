import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ControlInput from "../menuItems/ControlInput";
import Nav from "./components/Nav";
import Cart from "../cart/Cart";
import searchIcon from "../../theme/images/search.svg";
import { colors } from "../../theme/colors";
import CustomButton from "../menuItems/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { changeWidthMenu } from "../../redux/actions";
import { useForm, Controller } from "react-hook-form";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import clsx from "clsx";

const headerHeight = 60;

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
		"&:first-child": {
			"@media (max-width: 1300px)": {
				borderBottom: `1px solid ${colors.secondary}`,
			},
		},
		"&:last-child": {
			width: "100%",
			justifyContent: "space-between",
			"@media (max-width: 870px)": {
				marginTop: 60,
			},
		},
	},
	headerFirst: {
		"@media (max-width: 870px)": {
			position: "fixed",
			zIndex: 10,
			width: "100%",
			backgroundColor: colors.primary,
			top: 0,
		},
	},
	search: {
		flexGrow: 1,
		padding: "0 10px 0 25px",
		display: "flex",
		alignItems: "center",
		borderRight: `1px solid ${colors.secondary}`,
		"& span": {
			display: "flex",
		},
		"& button": {
			backgroundColor: "inherit",
		},
		"& img": {
			cursor: "pointer",
			height: 35,
		},
	},
	cart: {
		padding: "5px 42px 5px 20px",
		"@media (max-width: 430px)": {
			padding: "5px 15px",
		},
	},
});

export default function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const menuWidth = useSelector((state) => state.app.menuWidth);
	const currentPath = useSelector((state) => state.app.location);

	const [searchFocused, setSearchFocused] = useState(false);
	const [activeNav, setActiveNav] = useState(
		window.innerWidth > 870 ? true : false
	);

	window.addEventListener("resize", () => {
		if (window.innerWidth > 870) {
			setActiveNav(true);
		} else {
			setActiveNav(false);
		}
	});

	const openMenu = () => {
		dispatch(changeWidthMenu(220));
	};
	const closeMenu = () => {
		dispatch(changeWidthMenu(0));
	};

	const { handleSubmit, control } = useForm();

	const buttonStyles = {
		fontWeight: 700,
		fontSize: 25,
		minWidth: 220,
		height: headerHeight,
		fontFamily: "Open Sans Condensed",
	};

	const inputStyle = {
		fontSize: 25,
		maxWidth: 180,
	};

	const searchRequest = (data) => {
		console.log(data);
	};

	return currentPath === "/order" ? null : (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={clsx(classes.headerPart, classes.headerFirst)}>
					<CustomButton
						primary={colors.secondary}
						secondary={colors.primary}
						text="Каталог"
						action={menuWidth ? closeMenu : openMenu}
						styles={buttonStyles}
						enabled={false}
					/>
					<Nav
						setActiveNav={setActiveNav}
						activeNav={activeNav}
						headerHeight={headerHeight}
					/>
				</div>

				<div className={classes.headerPart}>
					<form
						onSubmit={handleSubmit(searchRequest)}
						className={classes.search}
					>
						<ClickAwayListener onClickAway={() => setSearchFocused(false)}>
							<span onClick={() => setSearchFocused(true)}>
								<ControlInput
									styles={inputStyle}
									Controller={Controller}
									name="search"
									control={control}
									searchFocused={searchFocused}
									text="Пошук товарів"
								/>
								<button type="submit">
									<img type="submit" src={searchIcon} alt="search" />
								</button>
							</span>
						</ClickAwayListener>
					</form>
					<div className={classes.cart}>
						<Cart />
					</div>
				</div>
			</div>
		</header>
	);
}
