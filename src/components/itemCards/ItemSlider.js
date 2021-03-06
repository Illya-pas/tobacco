import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import leftArrow from "../../theme/images/left-arrow.svg";
import { colors } from "../../theme/colors";
import { mediaBase } from "../../redux/queryItems";

const useStyles = makeStyles({
	root: {
		maxWidth: 620,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRight: `1px solid ${colors.secondary}`,
		"@media (max-width: 1329px)": {
			borderRight: "none",
			borderBottom: `1px solid ${colors.secondary}`,
			maxWidth: "100%",
		},
	},
	controls: {
		width: "87%",
		margin: 30,
		marginBottom: 15,
		display: "flex",
		justifyContent: "space-between",
		"& img": {
			height: 40,
			cursor: "pointer",
			"&:last-child": {
				transform: "rotateY(180deg)",
			},
		},
		"@media (max-width: 1329px)": {
			maxWidth: 570,
		},
	},
	slider: {
		width: "100%",
		minWidth: 300,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		maxHeight: 500,
		overflow: "hidden",
		"& img": {
			height: "fit-content",
			width: "80%",
			padding: 20,
			"@media (max-width: 1329px)": {
				maxWidth: 420,
			},
		},
	},
	describe: {
		"& h2": {
			fontSize: 24,
			fontWeight: 600,
			padding: "20px 0 20px 15px",
		},
		"& p": {
			fontSize: 20,
			fontWeight: 300,
			padding: " 0 15px 30px 15px",
			lineHeight: "26.6px",
		},
	},
});

export default function ItemSlider({ item }) {
	const classes = useStyles();
	const [itemIndex, setItemIndex] = useState(0);

	const getImages = () => {
		let itemList =
			item && item.image.map((singleItem) => mediaBase + singleItem.image);
		return itemList;
	};

	const images = [...getImages()];

	const plusIndex = () => {
		itemIndex < images.length - 1
			? setItemIndex(itemIndex + 1)
			: setItemIndex(0);
	};

	const minusIndex = () => {
		itemIndex > 0
			? setItemIndex(itemIndex - 1)
			: setItemIndex(images.length - 1);
	};

	return (
		<div className={classes.root}>
			<div className={classes.controls}>
				<img onClick={minusIndex} src={leftArrow} alt="arrow" />
				<img onClick={plusIndex} src={leftArrow} alt="arrow" />
			</div>
			<div className={classes.slider}>
				<img src={images[itemIndex]} alt="item-image" />
			</div>
			<div className={classes.describe}>
				<h2>????????</h2>
				<p>{item.description}</p>
			</div>
		</div>
	);
}
