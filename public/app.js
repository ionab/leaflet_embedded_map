const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.854979, -4.243281];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, glasgow, zoomLevel);

  mainMap.addMarker(glasgow);

  const japan = [36.697376,134.2495392]

  const button = document.querySelector('#take-me');
   button.addEventListener('click', function(){
       mainMap.moveTo(japan)
   });
}
window.addEventListener('load', drawMap);
