import React, { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";
import esriConfig from "@arcgis/core/config";
esriConfig.apiKey =
	"AAPK9928ede1767b45ac9580fcf5d81db099rEWnuzCXUeor-FPlge6bydprGlILUxdTVtlVLso0ngwUt2OnR0As2NeUJlXsmRD6";
function Map() {
	const MapEl = useRef(null);

	useEffect(() => {
		let view;
		loadModules(["esri/views/MapView", "esri/Map"], {
			css: true,
		}).then(([MapView, Map]) => {
			const map = new Map({
				// Map
				basemap: "arcgis-topographic",
			});
			view = new MapView({
				// basically the div container
				map: map,
				center: [],
				zoom: 8,
				container: MapEl.current, // Connection to div element below
			});
		});
		return () => {
			if (!!view) {
				view.destroy();
				view = null;
			}
		};
	});
	return <div style={{ height: 800 }} ref={MapEl}></div>;
}

export default Map;
