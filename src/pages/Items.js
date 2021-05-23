import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "../components/itemCards/MainCard";
import CustomButton from "../components/menuItems/CustomButton";
import { colors } from "../theme/colors";
import { fetchItems } from "../redux/actions";
import { sorting } from "../components/menu/components/Sorting";

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
	let currentLocation = useSelector((state) => state.app.location);
	let allFilters = useSelector((state) => state.cards.filters);
	let splitedHref = window.location.href.split("/");
	let currentItems = splitedHref[splitedHref.length - 1];
	const dispatch = useDispatch();

	const classes = useStyles();
	let currentItemList = null;
	let currentName = "";
	let currentFilters;

	useEffect(() => {
		dispatch(fetchItems(currentItems));
	}, [currentLocation]);

	if (currentItems === "paper") {
		currentItemList = useSelector((state) => state.cards.paper);
		currentName = "Бумага";

		currentFilters = allFilters.filter((filtr) => filtr.name === "paper");
	} else if (currentItems === "hilzy") {
		currentItemList = useSelector((state) => state.cards.hilzy);
		currentName = "Гільзи";

		currentFilters = allFilters.filter((filtr) => filtr.name === "hilzy");
	} else if (currentItems === "filter") {
		currentItemList = useSelector((state) => state.cards.filter);
		currentName = "Фільтри";

		currentFilters = allFilters.filter((filtr) => filtr.name === "filter");
	} else if (currentItems === "aroma") {
		currentItemList = useSelector((state) => state.cards.aroma);
		currentName = "Аромати";

		currentFilters = allFilters.filter((filtr) => filtr.name === "aroma");
	} else if (currentItems === "mashine") {
		currentItemList = useSelector((state) => state.cards.mashine);
		currentName = "Машинки";

		currentFilters = allFilters.filter((filtr) => filtr.name === "mashine");
	}

	const [allRendered, setAllRendered] = useState(false);

	currentItemList = sorting(currentItemList, currentFilters);

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
								itemType={currentItems}
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
