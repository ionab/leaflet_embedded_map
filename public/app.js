const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.854979, -4.243281];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, glasgow, zoomLevel);

  mainMap.addMarker(glasgow);

  const japan = [36.697376,134.2495392]
  //selects button from the html document

  const button = document.querySelector('#take-me');
  //adds event listener to declare what to do on the button click

  button.addEventListener('click', function(){
       mainMap.moveTo(japan)
  });
  
  //selects location button from the html doc
  const locationButton = document.querySelector('#location');

  //adds event listener and declares what to do on a button click.
  locationButton.addEventListener('click', function() {
      mainMap.currentLocation();
 })
}
window.addEventListener('load', drawMap);
