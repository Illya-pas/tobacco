import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CardInCart from "../components/itemCards/CardInCart";
import { colors } from "../theme/colors";
import CustomSelect from "../components/menuItems/CustomSelect";
import ControlInput from "../components/menuItems/ControlInput";
import { useForm, Controller } from "react-hook-form";
import Divider from "../components/Divider";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles({
	root: {
		"& h1": {
			padding: 40,
			paddingTop: 20,
			width: "100%",
			fontFamily: "Open Sans Condensed",
			textAlign: "center",
			fontSize: 54,
			"@media (max-width: 870px)": {
				padding: "30px 0",
				fontSize: 48,
			},
		},
		"@media (max-width: 870px)": {
			margin: 10,
		},
	},
	form: {
		"& h3": {
			fontSize: 34,
			fontWeight: 600,
			padding: "40px 0",
		},
	},
	mainOrder: {
		backgroundColor: colors.primary,
		width: "fit-content",
		border: `1px solid ${colors.secondary}`,
		margin: 20,
		height: "fit-content",
		"& h2": {
			fontSize: 35,
			fontWeight: 600,
			padding: 30,
			textAlign: "center",
		},
		"@media (max-width: 1330px)": {
			marginLeft: "5%",
		},
		"@media (max-width: 870px)": {
			margin: 0,
			width: "100%",
		},
	},
	cartItems: {
		margin: "0 20px 20px 20px",
		maxHeight: 620,
		overflow: "scroll",
		"&::-webkit-scrollbar": {
			width: 5,
			height: 0,
			borderRadius: "10px",
		},
		"&::-webkit-scrollbar-thumb": {
			background: colors.blackGrey,
			borderRadius: "10px",
		},
		"@media (max-width: 870px)": {
			margin: "0 10px 20px 10px",
		},
	},
	notFound: {
		fontSize: 30,
		textAlign: "center",
		margin: "30px 0",
		width: "100%",
	},
	wholeForm: {
		display: "flex",
		"@media (max-width: 1330px)": {
			flexDirection: "column-reverse",
		},
	},
	mainForm: {
		width: "35%",
		marginLeft: "5%",
		"@media (max-width: 870px)": {
			width: "100%",
			maxWidth: 600,
			marginLeft: 0,
		},
	},
	userInfo: {
		"& h3": {
			paddingBottom: "0px !important",
		},
	},
	bottomForm: {
		width: "100%",
		maxWidth: 600,
		marginLeft: "5%",
		"& textarea": {
			width: "95%",
			display: "block",
			border: `1px solid ${colors.secondary}`,
			resize: "none",
			fontWeight: 300,
			fontSize: 20,
			padding: 5,
			"@media (max-width: 442px)": {
				width: "100%",
			},
		},
		"@media (max-width: 870px)": {
			marginLeft: 0,
		},
	},
	formTotal: {
		display: "flex",
		"& h2": {
			fontWeight: 600,
			fontSize: 36,
			"&:last-child": {
				marginLeft: "10%",
			},
			"@media (max-width: 442px)": {
				fontSize: 32,
			},
		},
	},
	formButton: {
		fontFamily: "Open Sans Condensed",
		padding: 5,
		width: "100%",
		backgroundColor: colors.secondary,
		color: colors.primary,
		fontWeight: 700,
		fontSize: 36,
		margin: "50px 0",
		"@media (max-width: 442px)": {
			fontSize: 32,
		},
	},
	backButton: {
		backgroundColor: "red",
		margin: "10px 0 0 0",
		// color: colors.secondary,
	},
});

export default function Order() {
	const classes = useStyles();
	const history = useHistory();

	const cart = useSelector((state) => state.cart.cart);
	const total = useSelector((state) => state.cart.total);
	const paymenntChilds = ["?????????? ????????????????????", "?????????????????? ????????????"];
	const deliveryChilds = ["???????? ??????????", "??????????????????"];

	const { handleSubmit, control, setValue } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const deliveryInputs = [
		{
			name: "city",
			text: "??????????",
		},
		{
			name: "department",
			text: "????????????????????",
		},
	];

	const informationInputs = [
		{
			name: "name",
			text: "????'??",
		},
		{
			name: "surname",
			text: "????????????????",
		},
		{
			name: "phone",
			text: "?????????? ????????????????",
		},
		{
			name: "email",
			text: "e-mail",
		},
	];

	const inputStyle = {
		border: `1px solid ${colors.secondary}`,
		maxWidth: 400,
		fontSize: 20,
		marginTop: 40,
	};

	return (
		<div className={classes.root}>
			<h1>???????????????????? ????????????????????</h1>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={classes.wholeForm}>
					<div className={classes.mainForm}>
						<div>
							<h3>???????????? ????????????</h3>
							<CustomSelect
								text="?????????????? ???????????? ????????????"
								childs={paymenntChilds}
								name="payment"
								control={control}
								Controller={Controller}
								setValue={setValue}
							/>
						</div>
						<div>
							<h3>???????????? ????????????????</h3>
							<CustomSelect
								text="?????????????? ???????????? ????????????????"
								childs={deliveryChilds}
								name="delivery"
								control={control}
								Controller={Controller}
								setValue={setValue}
							/>

							{deliveryInputs.map((deliveryItem, index) => (
								<ControlInput
									key={index}
									name={deliveryItem.name}
									control={control}
									text={deliveryItem.text}
									Controller={Controller}
									styles={inputStyle}
								/>
							))}
						</div>
						<div className={classes.userInfo}>
							<h3>???????????????????? ?????? ????????????????????</h3>
							{informationInputs.map((informationInput, index) => (
								<ControlInput
									key={index}
									name={informationInput.name}
									control={control}
									text={informationInput.text}
									Controller={Controller}
									styles={inputStyle}
								/>
							))}
						</div>
					</div>

					<div className={classes.mainOrder}>
						<h2>???????? ????????????????????</h2>
						<div className={classes.cartItems}>
							{cart[0] ? (
								cart.map((cartItem, index) => {
									return (
										<CardInCart itemCard={cartItem} key={index} index={index} />
									);
								})
							) : (
								<div className={classes.notFound}>???????????????? ??????????</div>
							)}
						</div>
						<button
							className={clsx(classes.formButton, classes.backButton)}
							onClick={() => history.push("/")}
						>
							?????????????????????? ???? ??????????????
						</button>
					</div>
				</div>

				<div className={classes.bottomForm}>
					<h3>????????????????</h3>
					<Controller
						name="comment"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<textarea cols="30" rows="6" {...field}></textarea>
						)}
					/>
					<Divider styles={{ margin: "35px 0 20px 0" }} />
					<div className={classes.formTotal}>
						<h2>???? ????????????:</h2>
						<h2>{total} ??????</h2>
					</div>
					<button className={classes.formButton} type="submit">
						?????????????????????? ????????????????????
					</button>
				</div>
			</form>
		</div>
	);
}
