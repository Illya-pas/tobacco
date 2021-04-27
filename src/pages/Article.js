import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CustomButton from "../components/menuItems/CustomButton";
import ItemSlider from "../components/itemCards/ItemSlider";

const useStyles = makeStyles({
	root: {
		display: "flex",
		// "& h1": {
		// 	width: "fit-content",
		// 	marginLeft: 30,
		// 	marginTop: 50,
		// 	fontFamily: "Open Sans Condensed",
		// 	fontSize: 54,
		// },
	},
	info: {
		flexGrow: 1,
	},
	itemInfo: {
		"& h3": {
			padding: 30,
			fontSize: 25,
			lineHeight: "33.25px",
			fontWeight: 600,
		},
	},
});

export default function Article() {
	const classes = useStyles();
	let splitedHref = window.location.href.split("/");
	let currentItem = splitedHref[splitedHref.length - 1];

	const item = useSelector((state) => state.cards.cards.tobacco[1]);

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

	return (
		<div className={classes.root}>
			<ItemSlider item={item} />
			<div className={classes.info}>
				<div className={classes.itemInfo}>
					<h3>
						{item.type} <br /> {item.name}
					</h3>
					{item.available ? (
						<span style={{ color: "green" }}>В наявності</span>
					) : (
						<span style={{ color: "red" }}>Немає в наявності</span>
					)}
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
