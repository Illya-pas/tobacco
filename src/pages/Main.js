import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../components/itemCards/Carousel";
import Divider from "../components/Divider";
import ContactsBlock from "../components/footer/ContactsBlock";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { colors } from "../theme/colors";

const useStyles = makeStyles({
	itemGroup: {
		margin: "60px 0",
		"& a": {
			color: colors.secondary,
		},
		"& h1": {
			width: "fit-content",
			marginLeft: 50,
			fontFamily: "Open Sans Condensed",
			fontSize: 54,
			marginBottom: 30,
		},
	},
});

export default function Main() {
	const classes = useStyles();

	const tobaccos = useSelector((state) => state.cards.cards.tobacco);
	const consumables = useSelector((state) => state.cards.cards.consumables);
	const cigarettes = useSelector((state) => state.cards.cards.cigarettes);
	const accessories = useSelector((state) => state.cards.cards.accessories);

	const carousels = [
		{
			name: "Табак",
			id: "tobacco-carousel",
			type: tobaccos,
			link: "/items/tobacco",
		},
		{
			name: "Витратники",
			id: "consumables-carousel",
			type: consumables,
			link: "/items/consumables",
		},
		{
			name: "Сигари",
			id: "cigarettes-carousel",
			type: cigarettes,
			link: "/items/cigarettes",
		},
		{
			name: "Аксесуари",
			id: "accessories-carousel",
			type: accessories,
			link: "/items/accessories",
		},
	];

	return (
		<div className={classes.main}>
			{carousels.map((carousel, index) => {
				return (
					<div key={index}>
						<div className={classes.itemGroup}>
							<h1>
								<NavLink to={carousel.link}>{carousel.name}</NavLink>
							</h1>
							<Carousel escalator={carousel} />
						</div>
						<Divider />
					</div>
				);
			})}
			<ContactsBlock />
		</div>
	);
}
