import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	comments: {
		padding: 70,
		width: "100%",
		maxWidth: 1400,
		"@media (max-width: 700px)": {
			padding: 20,
		},
	},
	comentsHeader: {
		paddingBottom: 50,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& h1": {
			fontSize: 35,
			fontWeight: 600,
			"@media (max-width: 600px)": {
				paddingBottom: 15,
			},
		},
		"& p": {
			fontSize: 25,
			cursor: "pointer",
			"@media (max-width: 600px)": {
				fontSize: 22,
			},
		},
		"@media (max-width: 600px)": {
			flexDirection: "column",
			paddingBottom: 0,
		},
	},
	feedbacks: {
		fontSize: 20,
		"& span,p": {
			fontWeight: 300,
			lineHeight: "26.6px",
		},
	},
	singleComment: {
		marginTop: 20,
	},
	commentHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		paddingLeft: 0,
		"& h4": {
			fontWeight: 600,
		},
	},
});

export default function Comments() {
	const classes = useStyles();
	const history = useHistory();

	const com = {
		name: "Ольга",
		text: `Тютюн тонкої нарізки можна використовувати і для скручування самокруток і 
						для забивання гільз. Суміш, що складається з солодкуватої Вірджинії, гіркуватого 
						Берлі та пряного Орієнтал, приправлена ​​натуральним кавовим ароматом.`,
		time: "12.05.2021",
	};
	const comments = [com, com, com];

	return (
		<div className={classes.comments}>
			<div className={classes.comentsHeader}>
				<h1>Відгуки</h1>
				<p onClick={() => history.push("/feedbacks")}>
					Бажаєте залишити відгук?
				</p>
			</div>
			<div className={classes.feedbacks}>
				{comments.map((comment, index) => (
					<div key={index} className={classes.singleComment}>
						<div className={classes.commentHeader}>
							<h4>{comment.name}</h4>
							<span>{comment.time}</span>
						</div>
						<p>{comment.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}
