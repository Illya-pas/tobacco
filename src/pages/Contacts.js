import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactsBlock from "../components/footer/ContactsBlock";

const useStyles = makeStyles({
	contacts: {},
});

export default function Contacts() {
	const classes = useStyles();

	return (
		<div className={classes.contacts}>
			<ContactsBlock />
		</div>
	);
}
