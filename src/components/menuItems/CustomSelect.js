import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bottomArrow from "../../theme/images/bottom-arrow.svg";
import { colors } from "../../theme/colors";
import clsx from "clsx";

const useStyles = makeStyles({
	root: {
		fontSize: 20,
		fontWeight: 300,
		position: "relative",
	},
	select: {
		cursor: "pointer",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		maxWidth: 400,
		padding: 12,
		color: colors.secondary,
		border: `1px solid ${colors.secondary}`,
		"& img": {
			transform: "rotate(0deg)",
			transition: ".3s",
		},
	},
	activeImg: {
		transform: "rotate(180deg) !important",
		transition: ".3s",
	},
	selectChilds: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		maxWidth: 400,
		fontWeight: 400,
		borderBottom: `1px solid ${colors.secondary}`,
		zIndex: 2,
		visibility: "hidden",
		transform: "translateY(-100px)",
		opacity: 0,
		transition: "transform .3s, opacity .5s",
		position: "absolute",
		backgroundColor: colors.primary,
		"& span": {
			cursor: "pointer",
			padding: 12,
			border: `1px solid ${colors.secondary}`,
		},
	},
	activeChilds: {
		visibility: "visible",
		transform: "translateY(0px)",
		opacity: 1,
		transition: "transform .3s, opacity .5s",
	},
});

export default function CustomSelect({
	text,
	childs,
	name,
	control,
	Controller,
	setValue,
}) {
	const classes = useStyles();
	const [selectText, setSelectText] = useState(text);
	const [visibleChilds, setVisibleChilds] = useState(false);

	const changeSelect = (selectedValue) => {
		setSelectText(selectedValue);
		setValue(name, selectedValue);
	};
	let mainRoot = {};

	const hideChilds = () => {
		setVisibleChilds(false);
		mainRoot.removeEventListener("click", hideChilds);
	};

	useEffect(() => {
		mainRoot = document.querySelector("#root");
		visibleChilds && mainRoot.addEventListener("click", hideChilds);
	}, [visibleChilds]);

	return (
		<div className={classes.root}>
			<div
				onClick={() => setVisibleChilds(!visibleChilds)}
				className={classes.select}
			>
				<Controller
					name={name}
					control={control}
					defaultValue={selectText}
					render={({ field }) => <span {...field}>{selectText}</span>}
				/>

				<img
					className={clsx(visibleChilds && classes.activeImg)}
					src={bottomArrow}
					alt="select"
				/>
			</div>
			<div
				className={clsx(
					classes.selectChilds,
					visibleChilds && classes.activeChilds
				)}
			>
				{childs.map((child, index) => {
					return (
						<span key={index} onClick={(e) => changeSelect(e.target.innerText)}>
							{child}
						</span>
					);
				})}
			</div>
		</div>
	);
}
