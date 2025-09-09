require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
  "esri/geometry/Point"
], function(Map, MapView, CSVLayer, Point) {
  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

  const template = {
    title: "Crime Data for St. Louis, MO",
    content: "Crime in St. Louis."
  };

  const csvLayer = new CSVLayer({
    url: url,
    copyright: ""
  });

  csvLayer.renderer = {
    type: "simple", 
    symbol: {
      type: "simple-marker", 
      color: "yellow",
      outline: {
        color: [0, 255, 255],
        width: 1
      },
      size: "6px"
    }
  };

  const map = new Map({
    basemap: "streets",
    layers: [csvLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.1982, 38.6274],
    zoom: 10 
  });
});


  
