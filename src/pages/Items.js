import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import MainCard from "../components/itemCards/MainCard";

const useStyles = makeStyles({
	root: {
		"& h1": {
			width: "fit-content",
			marginLeft: 30,
			marginTop: 50,
			fontFamily: "Open Sans Condensed",
			fontSize: 54,
		},
	},
	main: {
		display: "flex",
		flexWrap: "wrap",
		marginBottom: 70,
	},
	notFound: {
		fontSize: 50,
		textAlign: "center",
		width: "100%",
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

	let cardStyles = {
		marginTop: 70,
	};

	return (
		<div className={classes.root}>
			<h1>{currentName}</h1>
			<div className={classes.main}>
				{currentItemList ? (
					currentItemList.map((currentItem, index) => {
						return (
							<MainCard
								styles={cardStyles}
								key={index}
								itemCard={currentItem}
							/>
						);
					})
				) : (
					<div className={classes.notFound}>NOT FOUND</div>
				)}
			</div>
		</div>
	);
}
