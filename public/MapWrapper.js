const MapWrapper = function(element, coords, zoom){
    const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

    this.map = L.map(element)
      .addLayer(osmLayer)
      .setView(coords, zoom);

    this.map.on("click", function(event){
      this.addMarker(event.latlng);
    }.bind(this));
}

MapWrapper.prototype.moveTo = function(place){
    this.map.flyTo(place, 6);
    L.marker(place).addTo(this.map).bindPopup(`<a href ='https://en.wikipedia.org/wiki/Japan'>more information</a>`).openPopup()

}

MapWrapper.prototype.currentLocation = function () {
  this.map.locate({setView: true})
};
MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);

};
