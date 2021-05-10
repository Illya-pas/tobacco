import React from "react";
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
		},
	},
});

export default function FooterCarousel() {
	const classes = useStyles();

	const tobaccos = useSelector((state) => state.cards.cards.tobacco);

	const carousel = {
		name: "Табак",
		id: "tobacco-carousel",
		type: tobaccos,
		link: "/items/tobacco",
	};

	return (
		<div className={classes.footerCarousel}>
			<h1>Товари, які Ви перешлянули</h1>
			<Carousel escalator={carousel} size={littleSize} />
		</div>
	);
}
