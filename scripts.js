    var mymap = L.map('mapid').setView([47.3255, -122.4416], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: 'pk.eyJ1IjoiY3JhZnR5a2VpdGgiLCJhIjoiY2poYXQxeWtpMDRwcDM3cnoxc213NzFzcSJ9.DKC2Wj-iDP_ARDtUElmXnw'
}).addTo(mymap);
var marker = L.marker([47.3255, -122.4416]).addTo(mymap);
var circle = L.circle([47.3255, -122.4416], {
	color: 'black',
	fillColor: '#f99',
	fillOpacity: 0.5,
	radius: 999
}).addTo(mymap);
var polygon = L.polygon([
	[47.3, -122.4],
	[47.3355, -122.45],
	[47.32, -122.44]
]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I'm an annoying popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
//$.getJSON(Signals.json",functional(data){L.geoJson(data,{style:function(feature) {return { color:"red",fillOpacity:0.5 };}onEachFeature:function (feature, layer){layer.bindPopup("<strong>"+"coordinates")}}).addTo(map);});
mymap.on('click', onMapClick);
