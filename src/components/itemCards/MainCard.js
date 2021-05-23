import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import CustomButton from "../menuItems/CustomButton";
import { addToCart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { littleSize } from "./CarouselSize";
import { mediaBase } from "../../redux/queryItems";

// DELETE
import cigarette1 from "../../theme/images/cigarette1.png";
// import noCigarette from "../../theme/images/no-cigarette.png";

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
			display: "flex",
			alignItems: "center",
			border: `1px solid ${colors.secondary}`,
			height: (props) => (props.currentSize.blackArrow ? 250 : 300),
			// padding: 10,
			overflow: "hidden",
			"& img": {
				width: "100%",
			},
		},
		// "&:hover": {
		// 	boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.6)",
		// 	transition: "box-shadow .2s",
		// 	cursor: "default",
		// },
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
		backgroundColor: colors.primary,
		color: colors.secondary,
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
		"& h5": {
			fontSize: (props) => props.currentSize.priceSize,
			display: "flex",
			alignItems: "center",
			minWidth: "fit-content",
		},
		"& button": {
			marginLeft: 13,
		},
	},
	optBuy: {
		justifyContent: "flex-start",
		margin: "8px 0 5px 0",
	},
	noAvailable: {
		position: "absolute",
		top: 20,
		color: "red",
		fontSize: 20,
		fontFamily: "Cousine",
	},
}));

export default function MainCard({
	itemCard,
	currentSize,
	itemsMargin,
	itemType,
}) {
	const classes = useStyles({ currentSize });
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart.cart);

	let buttonStyles = {
		fontWeight: 600,
		fontSize: 20,
		minWidth: 80,
		borderRadius: 3,
		backgroundColor: colors.secondary,
		padding: "5px 12px",
		marginRight: 15,
	};

	const pushToCart = () => {
		// console.log(itemCard.amount);
		// let newItemCard = { ...itemCard };
		// itemCard.amount ? itemCard.amount++ : (itemCard.amount = 1);
		dispatch(addToCart(itemCard, cart));
	};

	const getTag = () => {
		let tag = itemCard.tag[0].tag;
		return `${tag[0].toUpperCase()}${tag.slice(1)}`;
	};

	return (
		<div className={clsx(classes.card, itemsMargin && classes.cardMarged)}>
			{!itemCard.availability && (
				<span className={classes.noAvailable}>Немає в наявності</span>
			)}
			<NavLink to={`/article/${itemType}/${itemCard.id}`}>
				<img src={mediaBase + itemCard.image[0].image} alt="item" />
			</NavLink>
			<div className={classes.cardInfo}>
				<div className={classes.cardDescribe}>
					<p>{getTag()}</p>
					<h5>{itemCard.name}</h5>
				</div>
				<div>
					<div className={classes.cardBuy}>
						<h5>{itemCard.retailPrice} грн / шт</h5>
						<CustomButton
							primary={colors.primary}
							secondary={colors.secondary}
							text="КУПИТИ"
							action={pushToCart}
							styles={buttonStyles}
							enabled={false}
						/>
					</div>
					<div className={clsx(classes.cardBuy, classes.optBuy)}>
						<h5>
							{itemCard.wholesalePrice} грн / {itemCard.wholesaleCount}шт
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
