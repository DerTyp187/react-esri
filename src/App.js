import React, { useRef, useEffect } from "react";
import "./App.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config"; // https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html

//! Uncomment this for online api use
/*esriConfig.apiKey =
	"//! FREE_API_KEYS_ARE_AVAIABLE_HERE: https://developers.arcgis.com/api-keys/";*/

function App() {
	const MapEl = useRef(null);
	useEffect(() => {
		const map = new Map({
			basemap: "topo-vector", //"arcgis-topographic" for online api use
		});

		const view = new MapView({
			container: MapEl.current,
			map: map,
		});
	});
	return <div style={{ height: 800 }} ref={MapEl}></div>;
}

export default App;

/*
https://developers.arcgis.com/javascript/latest/tooling-intro/
https://developers.arcgis.com/javascript/latest/get-started/
*/
