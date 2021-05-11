import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme/colors";
import ControlInput from "../components/menuItems/ControlInput";
import CustomMarks from "../components/menuItems/CustomMarks";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles({
	root: {
		padding: 10,
		"& h1": {
			padding: 40,
			paddingBottom: 0,
			fontSize: 35,
			fontWeight: 600,
			"@media (max-width: 600px)": {
				paddingLeft: 0,
				fontSize: 31,
			},
		},
	},
	form: {
		marginLeft: 60,
		"& h3": {
			fontSize: 25,
			padding: "20px 0",
		},
		"& div": {
			paddingTop: 20,
		},
		"@media (max-width: 600px)": {
			marginLeft: 0,
		},
	},
	userInfo: {
		"& input": {
			border: `1px solid ${colors.secondary}`,
			maxWidth: 400,
			fontSize: 20,
			"&::placeholder": {
				color: colors.greyGrey,
			},
		},
	},
	bottomForm: {
		"& textarea": {
			width: "100%",
			display: "block",
			border: `1px solid ${colors.secondary}`,
			resize: "none",
			fontWeight: 300,
			fontSize: 20,
			padding: 5,
			maxWidth: 600,
		},
	},
	formButton: {
		fontFamily: "Open Sans Condensed",
		padding: 5,
		width: "100%",
		backgroundColor: colors.secondary,
		color: colors.primary,
		fontWeight: 700,
		fontSize: 26,
		margin: "50px 0",
		maxWidth: 300,
	},
});

export default function Feedbacks() {
	const classes = useStyles();

	const { handleSubmit, control, setValue } = useForm();
	const [activeMarks, setActiveMarks] = useState(0);

	const onSubmit = (data) => {
		const TIME = new Date(Date.now()).toLocaleString().split(",")[0].split("/");
		const reversedTime = [...TIME];
		reversedTime[0] = TIME[1] < 10 ? "0" + TIME[1] : TIME[1];
		reversedTime[1] = TIME[0] < 10 ? "0" + TIME[0] : TIME[0];

		data.timestamp = reversedTime.join(".");
		data.mark = activeMarks;
		console.log(data);
	};

	return (
		<div className={classes.root}>
			<h1>Бажаєте залишити відгук?</h1>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.userInfo}>
					<h3>Ваше ім'я</h3>
					<ControlInput
						name="username"
						control={control}
						text="Ім'я"
						Controller={Controller}
					/>
				</div>

				<div className={classes.marks}>
					<h3>Ваше замовлення</h3>
					<CustomMarks
						activeMarks={activeMarks}
						setActiveMarks={setActiveMarks}
					/>
				</div>
				<div className={classes.bottomForm}>
					<h3>Коментар</h3>
					<Controller
						name="comment"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<textarea cols="30" rows="8" {...field}></textarea>
						)}
					/>
					<button className={classes.formButton} type="submit">
						Залишити відгук
					</button>
				</div>
			</form>
		</div>
	);
}
