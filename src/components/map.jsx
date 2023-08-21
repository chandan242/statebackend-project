
import { useState, useEffect, useRef } from 'react';
import { mappls } from 'mappls-web-maps';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMapData, refreshMapData } from '../reducer/thunk/mapDataThunk';
// import { fetchDataToken } from '../apis/outpostapi';

  export const MAPLayout = () => {
    const dispatch = useDispatch();
    let markers = [];
    const { latitudes, longitudes, locations } = useSelector((state) => state.mapData);
  
    useEffect(() => {
      dispatch(fetchMapData());
      // dispatch(refreshMapData());
      // const cleanup = dispatch(refreshMapData()); // Start refreshing data

      // return () => {
      //   // Clean up the interval when the component unmounts
      //   cleanup();
      // };
    }, [dispatch]);
  
    // const [latitudes, setLatitudes] = useState([]);
    // const [longitudes, setLongitudes] = useState([]);
    // const [locations, setLocations] = useState([]);

    // useEffect(() => {
    //     fetchDataToken()
    //         .then(({ latitudes, longitudes, locations }) => {
    //             setLocations(locations);
    //             setLatitudes(latitudes);
    //             setLongitudes(longitudes);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching location data:', error);
    //         });
    // }, []);

  const  styleMap  = {width:  '100%', height:  '100vh', display:'inline-block'}
  const  mapProps  = { center: [28.6330, 77.2194], traffic:  false, zoom:  4, geolocation:  false, clickableIcons:  false }
  var mapObject ;
  var mapplsClassObject=  new  mappls();
  
      mapplsClassObject.initialize("8d4096e4ba1c3cfabb2feb542bd4782c",()=>{
          mapObject = mapplsClassObject.Map({id:  "map", properties: mapProps});
  
          //load map layers/components after map load, inside this callback (Recommended)
          mapObject.on("load", ()=>{
          // Activites after mapload

          // for one marker
          // markerObject = mapplsClassObject.Marker({
          //   map:  mapObject,
          //   position:{lat:28.5512908, lng:77.26809282},
          //   });
          //   markerObject.setPosition({lat:28.454,lng:77.5454});
          //   markerObject.setIcon("https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F03%2F43%2F19%2F08%2F360_F_343190831_9OJBksewrS1Ayoqb6uErcC6TitQJzbsz.jpg&tbnid=Kf8jxuWxy84lRM&vet=12ahUKEwjkqZuijuOAAxWBm2MGHYlhC88QMygHegQIARBj..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522red%2Bdot%2522&docid=U18AU0cUEvYH7M&w=540&h=360&q=red%20dot%20small%20image&ved=2ahUKEwjkqZuijuOAAxWBm2MGHYlhC88QMygHegQIARBj");
          
          markers.forEach(marker => marker.remove());
          markers = [];
          latitudes.forEach((lat, index) => {
            const lng = longitudes[index];
            const marker = mapplsClassObject.Marker({
                map: mapObject,
                position: { lat, lng }
            });
            markers.push(marker);
        });
          })
  
      });
  return (
  <div>
    <div  id="map"  style={styleMap}></div>
  </div>
  );
  }



  // when fetch location and show in map then some bug in map it not shows properly and sometimes it shows double, so bug fixed in map component