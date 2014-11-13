///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'johnatkinson.k7c253n7'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1Ijoiam9obmF0a2luc29uIiwiYSI6InVLM280SGsifQ.IBOj-xq9MTl9_sT_REsSTA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
