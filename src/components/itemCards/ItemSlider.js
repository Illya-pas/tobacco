import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import leftArrow from "../../theme/images/left-arrow.svg";
import noCigarette from "../../theme/images/no-cigarette.png";
import { colors } from "../../theme/colors";

const useStyles = makeStyles({
	root: {
		maxWidth: 620,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRight: `1px solid ${colors.secondary}`,
	},
	controls: {
		width: "87%",
		margin: 30,
		display: "flex",
		justifyContent: "space-between",
		"& img": {
			height: 40,
			cursor: "pointer",
			"&:last-child": {
				transform: "rotateY(180deg)",
			},
		},
	},
	slider: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		"& img": {
			width: "80%",
			padding: 20,
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
		},
	},
});

export default function ItemSlider({ item }) {
	const classes = useStyles();
	const [itemIndex, setItemIndex] = useState(0);

	const images = [item.img, noCigarette];

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
				<h2>Опис</h2>
				<p>
					Тютюн тонкої нарізки можна використовувати і для скручування
					самокруток і для забивання гільз. Суміш, що складається з солодкуватої
					Вірджинії, гіркуватого Берлі та пряного Орієнтал, приправлена
					​​натуральним кавовим ароматом.
				</p>
			</div>
		</div>
	);
}
