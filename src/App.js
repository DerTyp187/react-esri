import React, { useRef, useEffect } from "react";
import "./App.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { createRenderer } from "@arcgis/core/smartMapping/renderers/heatmap";
import CSVLayer from "@arcgis/core/layers/CSVLayer";
import esriConfig from "@arcgis/core/config"; // https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html

//! Uncomment this for online api use
/*esriConfig.apiKey =
	"//! FREE_API_KEYS_ARE_AVAIABLE_HERE: https://developers.arcgis.com/api-keys/";*/

function App() {
	const MapEl = useRef(null);
	useEffect(() => {
		const csvLayer = new CSVLayer({
			// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html#creating-a-csvlayer
			url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",
			copyright: "USGS Earthquakes",
		});
		const map = new Map({
			basemap: "topo-vector", //"arcgis-topographic" for online api use
			layers: [csvLayer],
		});

		const view = new MapView({
			container: MapEl.current,
			map: map,
		});

		createRenderer({
			// https://developers.arcgis.com/javascript/latest/api-reference/esri-smartMapping-renderers-heatmap.html#createRenderer
			view: view,
			layer: csvLayer,
		}).then((response) => {
			csvLayer.renderer = response.renderer;
		});
	});
	return <div style={{ height: 800 }} ref={MapEl}></div>;
}

export default App;

/*
https://developers.arcgis.com/javascript/latest/tooling-intro/
https://developers.arcgis.com/javascript/latest/get-started/
*/
