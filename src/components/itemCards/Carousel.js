import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import MainCard from "./MainCard";
import { useSelector } from "react-redux";
import rightArrowWhite from "../../theme/images/right-arrow-white.svg";

const cardSize = 300;
const cardMargin = 50;
const arowLength = 120;
const cardLength = cardSize + cardMargin;
const menuSize = 220;

const useStyles = makeStyles((props) => ({
	root: {
		height: "fit-content",
		alignItems: "center",
		width: (props) => props.carouselWidth + arowLength,
		transition: "width .3s",
		position: "relative",
		display: "flex",
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
	longArrow: {
		position: "absolute",
		backgroundColor: colors.secondary,
		padding: "13px 20px",
		right: 10,
		borderRadius: "50%",
		cursor: "pointer",
	},
}));

export default function Carousel({ escalator }) {
	const menuWidth = useSelector((state) => state.app.menuWidth);

	const [translateX, setTranslateX] = useState(0);
	const [carouselWidth, setCarouselWidth] = useState(0);
	const [slider, setSlider] = useState({});

	const setWidth = (callFromMenu) => {
		// contentWidth - with delay from menuWidth call
		let menu = 0;
		if (callFromMenu) {
			menu = !menuWidth ? menuSize : -menuSize;
		}
		let contentWidth = content.clientWidth - arowLength + menu;
		let counter = 0;

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

	const classes = useStyles({ carouselWidth, translateX });

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
						return <MainCard key={index} itemCard={tobacco} />;
					})}
				</div>
			</div>
			<img
				className={classes.longArrow}
				src={rightArrowWhite}
				alt="right-arrow"
				onClick={() => rollCarousel()}
			/>
		</div>
	);
}
