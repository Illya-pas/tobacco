import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../components/itemCards/Carousel";
import Divider from "../components/Divider";
import ContactsBlock from "../components/footer/ContactsBlock";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { colors } from "../theme/colors";
import { normalSize } from "../components/itemCards/CarouselSize";
import { fetchItems } from "../redux/actions";

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
			"@media (max-width: 870px)": {
				marginLeft: 0,
			},
		},
		"@media (max-width: 870px)": {
			margin: "30px 0",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
	},
});

export default function Main() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const search = useSelector((state) => state.cards.search);
	const paper = useSelector((state) => state.cards.paper);
	const hilzy = useSelector((state) => state.cards.hilzy);
	const filter = useSelector((state) => state.cards.filter);
	const aroma = useSelector((state) => state.cards.aroma);
	const mashine = useSelector((state) => state.cards.mashine);

	useEffect(() => {
		dispatch(fetchItems("paper"));
		dispatch(fetchItems("hilzy"));
		dispatch(fetchItems("filter"));
		dispatch(fetchItems("aroma"));
		dispatch(fetchItems("mashine"));
	}, []);

	const carousels = [
		{
			name: "Бумага",
			id: "paper-carousel",
			type: paper,
			link: "paper",
		},
		{
			name: "Гільзи",
			id: "hilzy-carousel",
			type: hilzy,
			link: "hilzy",
		},
		{
			name: "Фільтри",
			id: "filter-carousel",
			type: filter,
			link: "filter",
		},
		{
			name: "Аромати",
			id: "aroma-carousel",
			type: aroma,
			link: "aroma",
		},
		{
			name: "Машинки",
			id: "mashine-carousel",
			type: mashine,
			link: "mashine",
		},
	];

	const searchCarousel = {
		name: "Пошук",
		id: "search-carousel",
		type: search,
		link: "search",
	};

	return (
		<div className={classes.main}>
			{!searchCarousel.type.length ? (
				carousels.map((carousel, index) => {
					return !carousel.type.length ? null : (
						<div key={index}>
							<div className={classes.itemGroup}>
								<h1>
									<NavLink to={`/items/${carousel.link}`}>
										{carousel.name}
									</NavLink>
								</h1>
								<Carousel escalator={carousel} size={normalSize} />
							</div>
							<Divider />
						</div>
					);
				})
			) : (
				<div>
					<div className={classes.itemGroup}>
						<h1>
							<NavLink to={`/items/${searchCarousel.link}`}>
								{searchCarousel.name}
							</NavLink>
						</h1>
						<Carousel escalator={searchCarousel} size={normalSize} />
					</div>
					<Divider />
					{carousels.map((carousel, index) => {
						return !carousel.type.length ? null : (
							<div key={index}>
								<div className={classes.itemGroup}>
									<h1>
										<NavLink to={`/items/${carousel.link}`}>
											{carousel.name}
										</NavLink>
									</h1>
									<Carousel escalator={carousel} size={normalSize} />
								</div>
								<Divider />
							</div>
						);
					})}
				</div>
			)}
			<ContactsBlock />
		</div>
	);
}
