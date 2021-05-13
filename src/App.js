import { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Feedbacks from "./pages/Feedbacks";
import Header from "./components/header/Header";
import Catalog from "./components/menu/Catalog";
import { changeWidthMenu } from "./redux/actions";
import Footer from "./components/footer/Footer";
import Items from "./pages/Items";
import Article from "./pages/Article";
import Order from "./pages/Order";
import { useDispatch } from "react-redux";
import { changeLocation } from "./redux/actions";
import FooterCarousel from "./components/footer/FooterCarousel";

const useStyles = makeStyles({
	root: {
		height: "100%",
		paddingTop: 34,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		cursor: "default",
		"@media (max-width: 1300px)": {
			paddingTop: 0,
		},
	},
	container: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		width: "100%",
		maxWidth: 2000,
	},
	main: {
		flexGrow: 1,
		width: "100%",
		display: "flex",
	},
	content: {
		width: "100%",
	},
});

export default withRouter(function App({ location }) {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeLocation(location.pathname));
	}, [location]);

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.container}>
				<main className={classes.main}>
					<Catalog />
					<div id="content" className={classes.content}>
						<Switch>
							<Route exact path="/" component={Main} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contacts" component={Contacts} />
							<Route exact path="/feedbacks" component={Feedbacks} />
							<Route path="/items" component={Items} />
							<Route path="/article" component={Article} />
							<Route exact path="/order" component={Order} />
						</Switch>
					</div>
				</main>
				<FooterCarousel />
			</div>
			<Footer />
		</div>
	);
});

// <FooterCarousel />
