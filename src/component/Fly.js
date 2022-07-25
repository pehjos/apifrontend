import React, { useState } from "react";
import Axios from "axios";
import './fly.css'
import { Search } from "react-bootstrap-icons";
const API_KEY = "pk.eyJ1IjoicGVoam9zIiwiYSI6ImNsNXNkbG85ODAzeDQzcHNkY3A0bWhycXoifQ.8XjchNWK1aPi_DKNshSJvA";

const Fly = ({ setLat, setLon }) => {

// Setting up the state variable to store user input
const [city, setCity] = useState("Kolkata");

// Function to call the API and set the
// coordinates accordingly
function getCoordinates() {
	Axios.get(
	`https://api.mapbox.com/geocoding/v5/
		mapbox.places/${city}.json?access_token=${API_KEY}`
	).then((res) => {

	// Longitude
	setLon(res.data.features[0].geometry.coordinates[0]);
		
	// Latitude
	setLat(res.data.features[0].geometry.coordinates[1]);
	});
}

return (
	<div className="fly">

	<div className="inp-box">
		<input
        placeholder="city"
		type="text"
		onChange={(e) => {
			setCity(e.target.value);
		}}
		/>
		<button onClick={() => getCoordinates()}><Search/></button>
	</div>
	</div>
);
};

export default Fly;
