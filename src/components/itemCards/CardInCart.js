import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeAmount, delFromCart } from "../../redux/actions";
import clsx from "clsx";
import { mediaBase } from "../../redux/queryItems";

const useStyles = makeStyles({
	card: {
		height: 200,
		color: colors.secondary,
		display: "flex",
		alignItems: "center",
		marginTop: 40,
		"& img": {
			height: "100%",
			"@media (max-width: 600px)": {
				width: 190,
			},
		},
		"@media (max-width: 900px)": {
			marginTop: 30,
		},
		"@media (max-width: 600px)": {
			flexDirection: "column",
			height: "fit-content",
		},
	},
	cardImage: {
		height: "100%",
		overflow: "hidden",
		width: 200,
		display: "flex",
		justifyContent: "center",
		margin: 8,
	},
	cardDescribe: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		"@media (max-width: 730px)": {
			width: "100%",
		},
		"@media (max-width: 600px)": {
			marginTop: 10,
		},
		"& h5": {
			"@media (max-width: 600px)": {
				paddingRight: 40,
			},
		},
	},
	cardInfo: {
		backgroundColor: colors.primary,
		display: "flex",
		flexGrow: 1,
		height: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		// marginLeft: 7,
		"& h5": {
			fontSize: 22,
			fontWeight: 600,
			lineHeight: "30px",
		},
		"@media (max-width: 730px)": {
			flexDirection: "column",
			marginLeft: 15,
		},
		"@media (max-width: 600px)": {
			width: 190,
		},
	},
	cardBuy: {
		marginTop: 10,
		height: "100%",
		display: "flex",
		padding: "0 20px 0 50px",
		alignItems: "center",
		position: "relative",
		"& h5": {
			padding: "0 3px",
			fontSize: 40,
			fontWeight: 400,
			height: 55,
			display: "flex",
			alignItems: "center",
			borderRadius: "5px",
			position: "relative",
			"@media (max-width: 730px)": {
				fontSize: 36,
			},
			"@media (max-width: 600px)": {
				fontSize: 32,
			},
		},
		"& p": {
			paddingTop: 7,
			paddingLeft: 15,
		},
		"& span": {
			position: "absolute",
			border: `1px solid ${colors.secondary}`,
			borderRadius: "50%",
			display: "flex",
			justifyContent: "center",
			cursor: "pointer",
			width: 37,
			top: 0,
			right: 20,
			"&:hover": {
				backgroundColor: colors.secondary,
				color: colors.primary,
				transition: ".2s",
			},
			"@media (max-width: 730px)": {
				right: 7,
				top: -130,
			},
			"@media (max-width: 600px)": {
				right: 0,
				top: -128,
			},
		},
		"@media (max-width: 730px)": {
			width: "100%",
			padding: 0,
			justifyContent: "space-between",
		},
	},
	yellowPrice: {
		backgroundColor: "yellow",
	},
	saled: {
		position: "absolute",
		fontSize: 13,
		top: -7,
		right: 6,
	},
	itemPrice: {
		fontSize: 40,
		position: "relative",
		paddingLeft: "0px !important",
		fontWeight: 400,
	},
	crossedPrice: {
		textDecoration: "line-through",
		position: "absolute",
		left: 4,
		fontSize: 20,
		top: -7,
	},
	noAvailable: {
		color: colors.secondary,
		fontSize: 20,
		fontFamily: "Cousine",
	},
	amount: {
		marginTop: 30,
	},
	amountItem: {
		fontSize: 20,
		display: "flex",
		alignItems: "center",
		"& input": {
			display: "flex",
			textAlign: "center",
			marginLeft: 30,
			fontSize: 18,
			width: 52,
			border: `1px solid ${colors.secondary}`,
			padding: "3px 5px",
			position: "relative",
			"&::-webkit-outer-spin-button,&::-webkit-inner-spin-button": {
				"-webkit-appearance": "none",
				margin: 0,
			},
			"&[type=number]": {
				"-moz-appearance": "textfield",
			},
		},
	},
});

export default function CardInCart({ itemCard, styles, index }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);
	const [sale, setSale] = useState(false);

	const [inputState, setInputState] = useState(itemCard.amount);

	const handleInput = (inputValue) => {
		dispatch(changeAmount(inputValue, cart, index));
		setInputState(inputValue);
	};

	const handleDelete = () => {
		dispatch(delFromCart(cart, index));
	};

	useEffect(() => {
		itemCard.amount >= itemCard.wholesaleCount ? setSale(true) : setSale(false);
	}, [itemCard.amount]);

	const countPrice = () => {
		let price = itemCard.wholesalePrice / itemCard.wholesaleCount;
		return price.toFixed(1);
	};

	const getTag = () => {
		let tag = itemCard.tag[0].tag;
		return `${tag[0].toUpperCase()}${tag.slice(1)}`;
	};

	return (
		<div style={styles} className={classes.card}>
			<div className={classes.cardImage}>
				<img src={mediaBase + itemCard.image[0].image} alt="item" />
			</div>
			<div className={classes.cardInfo}>
				<div className={classes.cardDescribe}>
					<h5>
						{getTag()}
						<br />
						{itemCard.name}
					</h5>
					<div className={classes.amount}>
						{!itemCard.availability ? (
							<span className={classes.noAvailable}>Немає в наявності</span>
						) : (
							<div className={classes.amountItem}>
								<span>Кількість:</span>
								<input
									type="number"
									value={itemCard.amount}
									onChange={(e) => handleInput(e.target.value)}
								/>
							</div>
						)}
					</div>
				</div>
				<div className={classes.cardBuy}>
					<span onClick={handleDelete} style={{ fontSize: "35px" }}>
						&#10005;
					</span>
					<h5 className={clsx(sale && classes.yellowPrice)}>
						{
							<b
								className={clsx(
									classes.itemPrice,
									sale && classes.crossedPrice
								)}
							>
								{itemCard.retailPrice}
							</b>
						}
						{sale && <p>{countPrice()}</p>} &nbsp; грн
						{sale && <i className={classes.saled}>знижка</i>}
					</h5>
				</div>
			</div>
		</div>
	);
}
