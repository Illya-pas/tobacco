import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import MainCard from "./MainCard";
import { useSelector } from "react-redux";
import rightArrowWhite from "../../theme/images/right-arrow-white.svg";
import rightArrowBlack from "../../theme/images/right-arrow.svg";
import clsx from "clsx";

const normalSize = {
	cardSize: 304,
	cardMargin: 50,
	arowLength: 120,
	arrowSize: 100,
	describeSize: 16,
	buttonSize: 20,
	priceSize: 25,
	blackArrow: false,
};

const littleSize = {
	cardSize: 250,
	cardMargin: 30,
	arowLength: 120,
	arrowSize: 85,
	describeSize: 14,
	buttonSize: 16,
	priceSize: 20,
	blackArrow: true,
};

const useStyles = makeStyles((props) => ({
	root: {
		height: "fit-content",
		alignItems: "center",
		width: (props) => props.carouselWidth + props.currentSize.arowLength,
		transition: "width .3s",
		position: "relative",
		display: "flex",
		"@media (max-width: 870px)": {
			width: props.carouselWidth,
			flexDirection: "column",
			height: 500,
			marginLeft: -50,
			maxWidth: 300,
		},
	},
	carousel: {
		width: (props) => props.carouselWidth,
		transition: "width .3s",
		overflow: "hidden",
		height: "100%",
	},
	carouselInner: {
		display: "flex",
		width: "fit-content",
		transform: (props) => `translateX(${props.translateX}px)`,
		transition: "transform .3s",
	},
	arrow: {
		position: "absolute",
		padding: "13px 20px",
		width: (props) => props.arrowSize,
		right: 10,
		borderRadius: "50%",
		cursor: "pointer",
		"@media (max-width: 870px)": {
			width: littleSize.arrowSize,
			right: "initial",
			bottom: 0,
			marginLeft: 50,
		},
	},
	whiteArrow: {
		backgroundColor: colors.secondary,
	},
	blackArrow: {
		backgroundColor: colors.primary,
	},
}));

export default function Carousel({ escalator, size }) {
	const menuWidth = useSelector((state) => state.app.menuWidth);

	const [translateX, setTranslateX] = useState(0);
	const [carouselWidth, setCarouselWidth] = useState(0);
	const [currentSize, setCurrentSize] = useState(normalSize);
	const [slider, setSlider] = useState({});

	let cardLength = currentSize.cardSize + currentSize.cardMargin;

	const menuSize = 220;

	const setWidth = (callFromMenu) => {
		// contentWidth - with delay from menuWidth call
		let menu = 0;
		if (callFromMenu) {
			if (window.innerWidth > 870) {
				menu = !menuWidth ? menuSize : -menuSize;
			} else {
				return;
			}
		}
		let counter = 0;
		let contentWidth;

		window.innerWidth > 475
			? (contentWidth = content.clientWidth - currentSize.arowLength + menu)
			: (contentWidth = 400);

		while (true) {
			contentWidth -= cardLength;
			if (contentWidth > 0) {
				counter++;
			} else {
				break;
			}
		}
		setCarouselWidth(cardLength * counter);
	};

	useEffect(() => {
		let callFromMenu = true;
		setWidth(callFromMenu);
	}, [menuWidth]);

	useEffect(() => {
		const content = document.querySelector("#content");
		setSlider(document.querySelector("#" + escalator.id));
		setWidth();
	}, []);

	const classes = useStyles({ carouselWidth, translateX, currentSize });

	window.addEventListener("resize", () => setWidth());

	const rollCarousel = () => {
		if (-translateX < slider.clientWidth - carouselWidth) {
			setTranslateX(translateX - cardLength);
		} else {
			setTranslateX(0);
		}
	};

	return (
		<div className={classes.root}>
			<div id="carousel" className={classes.carousel}>
				<div id={escalator.id} className={classes.carouselInner}>
					{escalator.type.map((tobacco, index) => {
						return (
							<MainCard
								key={index}
								itemCard={tobacco}
								currentSize={currentSize}
							/>
						);
					})}
				</div>
			</div>
			<img
				className={clsx(
					classes.arrow,
					currentSize.blackArrow ? classes.blackArrow : classes.whiteArrow
				)}
				src={currentSize.blackArrow ? rightArrowBlack : rightArrowWhite}
				alt="right-arrow"
				onClick={rollCarousel}
			/>
		</div>
	);
}
