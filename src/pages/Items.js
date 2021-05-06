import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import MainCard from "../components/itemCards/MainCard";
import CustomButton from "../components/menuItems/CustomButton";
import { colors } from "../theme/colors";

const normalSize = {
	cardSize: 304,
	cardMargin: 50,
	arowLength: 120,
	arrowSize: 100,
	describeSize: 16,
	buttonSize: 20,
	priceSize: 25,
};

const useStyles = makeStyles({
	root: {
		"& h1": {
			width: "fit-content",
			marginLeft: 30,
			marginTop: 50,
			fontFamily: "Open Sans Condensed",
			fontSize: 54,
			"@media (max-width: 870px)": {
				marginTop: 30,
			},
		},
	},
	main: {
		display: "flex",
		justifyContent: "center",
		padding: "0 20px",
		flexWrap: "wrap",
		marginBottom: 70,
		marginLeft: -50,
	},
	notFound: {
		fontSize: 50,
		textAlign: "center",
		width: "100%",
	},
	buttonMore: {
		display: "flex",
		justifyContent: "center",
		marginBottom: 60,
		"& button": {
			fontFamily: "Open Sans Condensed",
			color: colors.primary,
			backgroundColor: colors.secondary,
			padding: 15,
			fontSize: 24,
			width: "100%",
			maxWidth: 400,
			height: 70,
		},
	},
});

export default function Feedbacks() {
	let splitedHref = window.location.href.split("/");
	let currentItems = splitedHref[splitedHref.length - 1];

	const classes = useStyles();
	let currentItemList = null;
	let currentName = "";

	if (currentItems === "tobacco") {
		currentItemList = useSelector((state) => state.cards.cards.tobacco);
		currentName = "Табак";
	} else if (currentItems === "consumables") {
		currentItemList = useSelector((state) => state.cards.cards.consumables);
		currentName = "Витратники";
	} else if (currentItems === "cigarettes") {
		currentItemList = useSelector((state) => state.cards.cards.cigarettes);
		currentName = "Сигари";
	} else if (currentItems === "accessories") {
		currentItemList = useSelector((state) => state.cards.cards.accessories);
		currentName = "Аксесуари";
	}

	const [allRendered, setAllRendered] = useState(false);

	return (
		<div className={classes.root}>
			<h1>{currentName}</h1>
			<div className={classes.main}>
				{currentItemList ? (
					currentItemList.map((currentItem, index) => {
						return (
							<MainCard
								itemsMargin={true}
								key={index}
								itemCard={currentItem}
								currentSize={normalSize}
							/>
						);
					})
				) : (
					<div className={classes.notFound}>NOT FOUND</div>
				)}
			</div>
			{currentItemList && !allRendered ? (
				<div className={classes.buttonMore}>
					<button>ПОБАЧИТИ БІЛЬШЕ</button>
				</div>
			) : null}
		</div>
	);
}
