import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/menuItems/CustomButton";
import ItemSlider from "../components/itemCards/ItemSlider";
import { colors } from "../theme/colors";
import { addToCart } from "../redux/actions";
import Divider from "../components/Divider";
import CustomTabs from "../components/otherComponents/CustomTabs";
import Comments from "../components/otherComponents/Comments";
import { fetchItems } from "../redux/actions";

const useStyles = makeStyles({
	main: {
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
		"@media (max-width: 600px)": {
			padding: 15,
		},
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
	let currentID = splitedHref[splitedHref.length - 1];
	let currentType = splitedHref[splitedHref.length - 2];

	const cart = useSelector((state) => state.cart.cart);

	let filterByID = `(id: "${currentID}")`;

	useEffect(() => {
		dispatch(fetchItems(currentType, filterByID));
	}, []);

	let item;
	let characteristics;

	if (currentType === "paper") {
		item = useSelector((state) => state.cards.paper);
		characteristics = [
			{
				title: "Бренд",
				value: item[0] && item[0].brand,
			},
			{
				title: "Колір",
				value: item[0] && item[0].color,
			},
			{
				title: "Довжина",
				value: item[0] && item[0].paperLen,
			},
			{
				title: "Ширина",
				value: item[0] && item[0].paperWidth,
			},
			{
				title: "Густота",
				value: item[0] && item[0].density,
			},
			{
				title: "Країна виробництва",
				value: item[0] && item[0].producer,
			},
		];
	} else if (currentType === "hilzy") {
		item = useSelector((state) => state.cards.hilzy);
		characteristics = [
			{
				title: "Бренд",
				value: item[0] && item[0].brand,
			},
			{
				title: "Довжина гільзи",
				value: item[0] && item[0].hilzLen,
			},
			{
				title: "Довжина фільтру",
				value: item[0] && item[0].filterLen,
			},
			{
				title: "Діаметр гільзи",
				value: item[0] && item[0].hilzDiametr,
			},
			{
				title: "Країна виробництва",
				value: item[0] && item[0].producer,
			},
		];
	} else if (currentType === "filter") {
		item = useSelector((state) => state.cards.filter);
		characteristics = [
			{
				title: "Бренд",
				value: item[0] && item[0].brand,
			},
			{
				title: "Довжина фільтру",
				value: item[0] && item[0].filtersLen,
			},
			{
				title: "Діаметр фільтру",
				value: item[0] && item[0].filtersDiametr,
			},
		];
	} else if (currentType === "aroma") {
		item = useSelector((state) => state.cards.aroma);
		characteristics = [
			{
				title: "Бренд",
				value: item[0] && item[0].brand,
			},
			{
				title: "Аромат",
				value: item[0] && item[0].aromat,
			},
			{
				title: "Країна виробництва",
				value: item[0] && item[0].producer,
			},
		];
	} else if (currentType === "mashine") {
		item = useSelector((state) => state.cards.mashine);
		characteristics = [
			{
				title: "Бренд",
				value: item[0] && item[0].brand,
			},
			{
				title: "Країна виробництва",
				value: item[0] && item[0].producer,
			},
		];
	}

	let buttonStyles = {
		fontWeight: 500,
		fontSize: 28,
		borderRadius: 3,
		padding: "10px 30px",
		width: "fit-content",
		marginTop: 15,
	};

	// item[0] ? (item[0].img = cigarette1) : null;

	const getTag = () => {
		let tag = item[0].tag[0].tag;
		return `${tag[0].toUpperCase()}${tag.slice(1)}`;
	};

	return (
		<div className={classes.root}>
			<div className={classes.main}>
				<ItemSlider item={item[0] || ""} />
				<div className={classes.info}>
					<div className={classes.itemInfo}>
						<h3>
							{item[0] && getTag()} <br /> {item[0] && item[0].name}
						</h3>
						<div className={classes.itemId}>
							{item[0] && item[0].availability ? (
								<span style={{ color: "green" }}>В наявності</span>
							) : (
								<span style={{ color: "red" }}>Немає в наявності</span>
							)}
							<p>Артикул: {item[0] && item[0].id}</p>
						</div>
						<div className={classes.itemPrice}>
							<div>
								<h2>{item[0] && item[0].retailPrice} грн/шт</h2>
								<h2>
									{item[0] && item[0].wholesalePrice} грн/
									{item[0] && item[0].wholesaleCount}шт
								</h2>
							</div>
							<CustomButton
								primary={colors.secondary}
								secondary={colors.primary}
								text="КУПИТИ"
								action={() => dispatch(addToCart(item[0], cart))}
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
			<Comments />
		</div>
	);
}
