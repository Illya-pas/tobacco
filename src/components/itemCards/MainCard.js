import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import CustomButton from "../menuItems/CustomButton";
import { addToCart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const littleSize = {
	cardSize: 250,
	cardMargin: 30,
	arowLength: 120,
	arrowSize: 85,
	describeSize: 14,
	buttonSize: 16,
	priceSize: 20,
};

const useStyles = makeStyles((props) => ({
	card: {
		position: "relative",
		width: (props) => props.currentSize.cardSize,
		color: colors.primary,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginLeft: (props) => props.currentSize.cardMargin,

		"& a": {
			width: "100%",
			border: `1px solid ${colors.secondary}`,
			"& img": {
				width: "100%",
			},
		},
		"&:hover": {
			boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.6)",
			transition: "box-shadow .2s",
			cursor: "default",
		},
	},
	cardMarged: {
		marginTop: 70,
		"@media (max-width: 870px)": {
			marginTop: 40,
		},
	},
	cardDescribe: {
		"& h5": {
			marginTop: 5,
		},
	},
	cardInfo: {
		width: "100%",
		backgroundColor: colors.secondary,
		padding: "5px 15px",
		"& p": {
			fontSize: (props) => props.currentSize.describeSize,
			fontWeight: 300,
		},
		"& h5": {
			fontSize: (props) => props.currentSize.buttonSize,
			fontWeight: 600,
		},
	},
	cardBuy: {
		marginTop: 10,
		display: "flex",
		justifyContent: "space-around",
		"& h5": {
			fontSize: (props) => props.currentSize.priceSize,
			display: "flex",
			alignItems: "center",
		},
	},
	noAvailable: {
		position: "absolute",
		top: 20,
		color: colors.secondary,
		fontSize: 20,
		fontFamily: "Cousine",
	},
}));

export default function MainCard({
	itemCard,
	styles,
	currentSize,
	itemsMargin,
}) {
	const classes = useStyles({ currentSize });
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart.cart);

	let buttonStyles = {
		fontWeight: 600,
		fontSize: 20,
		minWidth: 80,
		borderRadius: 3,
		backgroundColor: colors.semiWhite,
		padding: "5px 12px",
		marginRight: 15,
	};

	return (
		<div
			style={styles}
			className={clsx(classes.card, itemsMargin && classes.cardMarged)}
		>
			{!itemCard.available && (
				<span className={classes.noAvailable}>Немає в наявності</span>
			)}
			<NavLink to={"/article/" + itemCard.id}>
				<img src={itemCard.img} alt="item" />
			</NavLink>
			<div className={classes.cardInfo}>
				<div className={classes.cardDescribe}>
					<p>{itemCard.type}</p>
					<h5>{itemCard.name}</h5>
				</div>
				<div className={classes.cardBuy}>
					<h5>{itemCard.price} грн</h5>
					<CustomButton
						primary={colors.primary}
						secondary={colors.secondary}
						text="КУПИТИ"
						action={() => dispatch(addToCart(itemCard, cart))}
						styles={buttonStyles}
						enabled={false}
					/>
				</div>
			</div>
		</div>
	);
}
