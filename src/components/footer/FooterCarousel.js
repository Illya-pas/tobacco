import React, { useState, useEffect } from "react";
import Carousel from "../itemCards/Carousel";
import { littleSize } from "../itemCards/CarouselSize";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";

const useStyles = makeStyles({
	footerCarousel: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "40px 20px",
		border: `1px solid ${colors.secondary}`,
		borderLeft: "none",
		borderRight: "none",
		"& h1": {
			width: "100%",
			display: "flex !important",
			justifyContent: "flex-start",
			fontWeight: 700,
			fontSize: 25,
			padding: "0 0 40px 35px",
			fontFamily: "Open Sans Condensed",
			"@media (max-width: 365px)": {
				padding: "0 0 30px 0",
			},
		},
		"@media (max-width: 365px)": {
			padding: "25px 15px",
		},
	},
});

export default function FooterCarousel() {
	const classes = useStyles();
	const [showWatched, setShowWatched] = useState(false);

	const paper = useSelector((state) => state.cards.paper);
	const locate = useSelector((state) => state.app.location);

	useEffect(() => {
		locate.includes("items") || locate.includes("article")
			? setShowWatched(true)
			: setShowWatched(false);
	}, [locate]);

	const carousel = {
		name: "Табак",
		id: "watched-carousel",
		type: paper,
		link: "paper",
	};

	return (
		<>
			{!showWatched ? null : (
				<div className={classes.footerCarousel}>
					<h1>Товари, які Ви переглянули</h1>
					<Carousel escalator={carousel} size={littleSize} />
				</div>
			)}
		</>
	);
}
