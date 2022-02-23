import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import PeopleView from "./views/PeopleView";
import PlanetsView from "./views/PlanetsView";
import VehiclesView from "./views/VehiclesView";
import injectContext from "./store/appContext";

import { NavbarSW } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarSW />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/PeopleView/:id">
							<PeopleView />
						</Route>
						<Route exact path="/PlanetsView/:id">
							<PlanetsView />
						</Route>
						<Route exact path="/VehiclesView/:id">
							<VehiclesView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
