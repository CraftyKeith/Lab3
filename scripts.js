    var map = L.map('map').setView([47.3255, -122.4416], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    	maxZoom: 15,
    	id: 'mapbox.streets',
    	accessToken: 'pk.eyJ1IjoiY3JhZnR5a2VpdGgiLCJhIjoiY2poYXQxeWtpMDRwcDM3cnoxc213NzFzcSJ9.DKC2Wj-iDP_ARDtUElmXnw'
    }).addTo(map);

    // load a tile layer
    //maptile website****

      // load Pierce mobility data GeoJSON from an external file
      //NEED TO STYLE*TO ADT LAYER

  $.getJSON("piercemobility.geojson",function(data){
  L.geoJson(data, {
      style: function(feature){
        var fillColor,
          traffic = feature.properties.ADT;
          if (traffic > 38001) fillcolor = "#FFFFFF";
          else if (traffic > 17851) fillColor = "#FFD456";
          else if (traffic > 9001) fillColor = "#F2A72E";
          else if (traffic > 3026) fillColor = "#AD5313";
          else if (traffic > 0) fillColor = "#000000";
          else fillColor="#000000"; //no data
          return {color:fillColor, weight: 1,};
      }
  })
    // // add GeoJSON layer to the map once the file is loaded
    // L.geoJson(data).
    .addTo(map);
   });

    // load Peirce County Owned Street Signals GeoJSON from an external file
  $.getJSON("Signals.json",function(data){
    var signalIcon = L.icon({
      iconUrl: 'signal.png',
      iconSize: [5,15]
      });
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data ,{
      pointToLayer: function(feature,latlng){
  	  return L.marker(latlng,{icon: signalIcon});
      }
    }).addTo(map);
  });

  // map.on('click', 'signal', function (e) {
  //       //1. set the coordinates of the popup
  //       var coordinates = e.features[0].geometry.coordinates;
  //       //2. create the information that will display in the popup
  //       var description = "<p>This is the traffic signal at " + e.features[0].geometry.coordinates;
  //       //3. make the popup
  //       new mapboxgl.Popup()
  //               .setLngLat(coordinates)


  // function onMapClick(e) {
  // 	alert("You clicked the map at " + e.latlng);
  // $.getJSON(Signals.json",functional(data){L.geoJson(data,{style:function(feature) {return { color:"red",fillOpacity:0.5 };}onEachFeature:function (feature, layer){layer.bindPopup("<strong>"+"coordinates")}}).addTo(map);});
  // mymap.on('click', onMapClick);

  $.getJSON("boundary.json",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
    });
