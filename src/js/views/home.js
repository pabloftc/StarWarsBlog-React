import React from "react";
import "../../styles/home.css";
import { Container } from 'react-bootstrap'
import PeopleCard from "../component/PeopleCard";
import PlanetsCard from "../component/PlanetsCard";
import VehiclesCard from "../component/VehiclesCard";

export const Home = () => (
	<>
		<Container fluid>
			<h1>Characters</h1>
			<PeopleCard />
		</Container>
		<Container fluid>
			<h1>Planets</h1>
			<PlanetsCard />
		</Container>
		<Container fluid>
			<h1>Vehicles</h1>
			<VehiclesCard />
		</Container>
	</>
);
