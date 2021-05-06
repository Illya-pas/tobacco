import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeAmount, delFromCart } from "../../redux/actions";

const useStyles = makeStyles({
	card: {
		height: 200,
		color: colors.secondary,
		display: "flex",
		alignItems: "center",
		marginTop: 40,
		"& img": {
			width: 200,
			"@media (max-width: 900px)": {
				width: 180,
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
	},
	cardInfo: {
		backgroundColor: colors.primary,
		display: "flex",
		flexGrow: 1,
		height: "100%",
		alignItems: "center",
		"& h5": {
			fontSize: 22,
			fontWeight: 600,
			lineHeight: "30px",
		},
		"@media (max-width: 730px)": {
			flexDirection: "column",
			marginLeft: 15,
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
			fontSize: 40,
			fontWeight: 400,
			"@media (max-width: 730px)": {
				fontSize: 36,
			},
			"@media (max-width: 600px)": {
				fontSize: 32,
			},
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
				top: -325,
			},
			"@media (max-width: 331px)": {
				right: 7,
				top: -354,
			},
		},
		"@media (max-width: 730px)": {
			width: "100%",
			padding: 0,
			justifyContent: "space-between",
		},
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

	const [inputState, setInputState] = useState(itemCard.amount);

	const handleInput = (inputValue) => {
		dispatch(changeAmount(inputValue, cart, index));
		setInputState(inputValue);
	};

	const handleDelete = () => {
		dispatch(delFromCart(cart, index));
	};

	return (
		<div style={styles} className={classes.card}>
			<img src={itemCard.img} alt="item" />
			<div className={classes.cardInfo}>
				<div className={classes.cardDescribe}>
					<h5>
						{itemCard.type}
						<br />
						{itemCard.name}
					</h5>
					<div className={classes.amount}>
						{!itemCard.available ? (
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
					<h5>{itemCard.price} грн</h5>
				</div>
			</div>
		</div>
	);
}
