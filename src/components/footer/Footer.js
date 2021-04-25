import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
	footer: {
		width: "100%",
		backgroundColor: colors.secondary,
		display: "flex",
		justifyContent: "center",
		padding: "40px 50px",
		"& h2": {
			marginTop: 20,
			fontFamily: "Cousine",
			color: colors.greyGrey,
			marginRight: 80,
			fontSize: 25,
			lineHeight: "45px",
			"@media (max-width: 780px)": {
				marginRight: 10,
			},
		},
	},
	container: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		maxWidth: 2000,
		"@media (max-width: 1300px)": {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	footerRight: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "space-around",
		color: colors.semiWhite,
		fontSize: 18,
		"& h3": {
			fontSize: 22,
			fontWeight: 600,
		},
		"@media (max-width: 1300px)": {
			width: "100%",
			marginTop: 30,
		},
		"@media (max-width: 780px)": {
			flexDirection: "column",
			textAlign: "center",
		},
	},
	footerColumn: {
		display: "flex",
		flexDirection: "column",
		"& a, div": {
			color: colors.semiWhite,
			marginTop: 15,
		},
		"@media (max-width: 780px)": {
			marginTop: 35,
		},
	},
});

export default function Footer() {
	const classes = useStyles();

	const [catalog, setCatalog] = useState([
		{
			name: "Табак",
			link: "/items/tobacco",
		},
		{
			name: "Витратники",
			link: "/items/consumables",
		},
		{
			name: "Сигари",
			link: "/items/cigarettes",
		},
		{
			name: "Аксесуари",
			link: "/items/accessories",
		},
	]);

	const [forClients, setForClients] = useState([
		{
			name: "Про нас",
			link: "/about",
		},
		{
			name: "Угода користувача",
			link: "/agreement",
		},
		{
			name: "Обмін та повернення",
			link: "/exchange",
		},
		{
			name: "Доставка і оплата",
			link: "/delivery",
		},
		{
			name: "Відгуки про магазин",
			link: "/feedbacks",
		},
	]);

	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<h2 className={classes.footerLeft}>
					Відвідування та перегляд сайту особам
					<br />
					до 18 років заборонено!
					<br />
					Куріння шкідиве для вашого здоров’я
				</h2>

				<div className={classes.footerRight}>
					<div className={classes.footerColumn}>
						<h3>Каталог</h3>
						{catalog.map((catalogItem, index) => {
							return (
								<NavLink to={catalogItem.link} key={index}>
									{catalogItem.name}
								</NavLink>
							);
						})}
					</div>
					<div className={classes.footerColumn}>
						<h3>Клієнтам</h3>
						{forClients.map((forClientsItem, index) => {
							return (
								<NavLink to={forClientsItem.link} key={index}>
									{forClientsItem.name}
								</NavLink>
							);
						})}
					</div>
					<div className={classes.footerColumn}>
						<h3>Контактна Інформація</h3>
						<div>+ 38 (000) 000 00 00</div>
						<div>+ 38 (000) 000 00 00</div>
						<div>shop@gmail.com</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
