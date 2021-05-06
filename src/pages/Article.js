import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/menuItems/CustomButton";
import ItemSlider from "../components/itemCards/ItemSlider";
import { colors } from "../theme/colors";
import { addToCart } from "../redux/actions";
import Divider from "../components/Divider";
import CustomTabs from "../components/otherComponents/CustomTabs";

const useStyles = makeStyles({
	root: {
		display: "flex",
		borderBottom: `1px solid ${colors.secondary}`,
		"@media (max-width: 1329px)": {
			flexDirection: "column",
		},
	},
	info: {
		flexGrow: 1,
		"& h3": {
			fontSize: 25,
			fontWeight: 600,
			padding: " 0 0 30px 0",
			lineHeight: "33.25px",
		},
	},
	itemInfo: {
		padding: 35,
	},
	itemId: {
		fontWeight: 300,
		fontSize: 17,
		width: "100%",
		maxWidth: 340,
		display: "flex",
		justifyContent: "space-between",
		"& p": {
			color: "#7D7E7D",
		},
	},
	itemPrice: {
		display: "flex",
		marginTop: 15,
		alignItems: "center",
		width: "100%",
		maxWidth: 500,
		justifyContent: "space-between",
		"@media (max-width: 500px)": {
			flexDirection: "column",
			alignItems: "flex-start",
		},
		"& h2": {
			minWidth: 204,
			fontSize: 30,
			fontWeight: 600,
			marginTop: 15,
		},
	},
	characteristics: {
		display: "flex",
		flexDirection: "column",
		padding: 35,
		"@media (max-width: 500px)": {
			padding: "35px 20px",
		},
	},
	characteristicsInfo: {
		display: "flex",
		fontSize: 19,
		lineHeight: "26.6px",
	},
	characteristicsLeft: {
		"& div": {
			display: "flex",
			justifyContent: "space-between",
			width: 500,
			"@media (max-width: 570px)": {
				width: 280,
				flexDirection: "column",
				alignItems: "flex-start",
			},
		},
		"& h4": {
			fontWeight: 600,
			width: "50%",
			"@media (max-width: 570px)": {
				width: "100%",
			},
		},
		"& span": {
			marginLeft: 20,
			fontWeight: 300,
			flexGrow: 1,
		},
	},
});

export default function Article() {
	const dispatch = useDispatch();
	const classes = useStyles();
	let splitedHref = window.location.href.split("/");
	let currentItem = splitedHref[splitedHref.length - 1];

	const item = useSelector((state) => state.cards.cards.tobacco[0]);
	const cart = useSelector((state) => state.cart.cart);

	const [characteristics, setCharacteristics] = useState([
		{
			title: "Призначення тютюну",
			value: "Для самокруток",
		},
		{
			title: "Бренд",
			value: "Mac Baren",
		},
		{
			title: "Міцність",
			value: "Середньо-м'який",
		},
		{
			title: "Аромат",
			value: "Кава",
		},
		{
			title: "Склад",
			value: "Virginia, Burley, Oriental",
		},
		{
			title: "Країна виробництва",
			value: "Данія",
		},
	]);

	let buttonStyles = {
		fontWeight: 500,
		fontSize: 28,
		borderRadius: 3,
		padding: "10px 30px",
		width: "fit-content",
		marginTop: 15,
	};

	return (
		<div className={classes.root}>
			<ItemSlider item={item} />
			<div className={classes.info}>
				<div className={classes.itemInfo}>
					<h3>
						{item.type} <br /> {item.name}
					</h3>
					<div className={classes.itemId}>
						{item.available ? (
							<span style={{ color: "green" }}>В наявності</span>
						) : (
							<span style={{ color: "red" }}>Немає в наявності</span>
						)}
						<p>Артикул: {item.id}</p>
					</div>
					<div className={classes.itemPrice}>
						<div>
							<h2>{item.price} грн/шт</h2>
							<h2>{item.price * 10} грн/блок</h2>
						</div>
						<CustomButton
							primary={colors.secondary}
							secondary={colors.primary}
							text="КУПИТИ"
							action={() => dispatch(addToCart(item, cart))}
							styles={buttonStyles}
						/>
					</div>
				</div>

				<Divider />

				<div className={classes.characteristics}>
					<h3>Характеристики</h3>
					<div className={classes.characteristicsInfo}>
						<div className={classes.characteristicsLeft}>
							{characteristics.map((characteristic, index) => {
								return (
									<div key={index}>
										<h4>{characteristic.title}</h4>
										<span>{characteristic.value}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<Divider />

				<CustomTabs />
			</div>
		</div>
	);
}
