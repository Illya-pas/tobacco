import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import pointIcon from "../../theme/images/point.svg";

const useStyles = makeStyles({
	contacts: {
		margin: "60px 30px 60px 60px",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		"@media (max-width: 1391px)": {
			flexDirection: "column",
			alignItems: "center",
		},
		"@media (max-width: 680px)": {
			margin: 20,
		},
	},
	leftContacts: {
		margin: "0 120px 65px 0",
		"& h1": {
			fontFamily: "Open Sans Condensed",
			fontSize: 54,
			marginBottom: 30,
			"@media (max-width: 680px)": {
				textAlign: "center",
			},
		},
		"& div": {
			marginLeft: 40,
			fontSize: 40,
			lineHeight: "53.2px",
			color: colors.blackGrey,
			"@media (max-width: 680px)": {
				fontSize: 30,
				marginLeft: 0,
			},
		},
		"@media (max-width: 680px)": {
			margin: "0 0 35px 0",
		},
	},
	rightContacts: {
		"& div": {
			marginTop: 10,
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			"& span": {
				fontSize: 35,
				lineHeight: "46.55px",
				"@media (max-width: 680px)": {
					fontSize: 30,
					marginLeft: 20,
				},
			},
			"@media (max-width: 680px)": {
				justifyContent: "flex-start",
			},
		},
		"& iframe": {
			"@media (max-width: 680px)": {
				width: 310,
				height: 220,
				justifyContent: "flex-start",
			},
		},
		display: "flex",
		flexDirection: "column",
		"@media (max-width: 680px)": {
			alignItems: "center",
		},
	},
});

export default function ContactsBlock() {
	const classes = useStyles();

	return (
		<div className={classes.contacts}>
			<div className={classes.leftContacts}>
				<h1>Контакти</h1>
				<div>+ 38 (000) 000 00 00</div>
				<div>+ 38 (000) 000 00 00</div>
				<div>shop@gmail.com</div>
			</div>

			<div className={classes.rightContacts}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20587.95668805453!2d23.98160083848094!3d49.83316375210884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add803265caab%3A0x5a51467a5aadaf85!2z0YPQuy4g0JLQsNGB0YvQu9GM0LrQuNCy0YHQutC-0LPQviwgMzUsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1618770994271!5m2!1sru!2sua"
					width="555"
					height="345"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
				></iframe>
				<div>
					<img src={pointIcon} alt="point" />
					<span>
						м. Львів, <br />
						вул. Велика Васильківська 35Б
					</span>
				</div>
			</div>
		</div>
	);
}
