import { useState, useEffect, useRef } from 'react';
import { mappls } from 'mappls-web-maps';
// import { useSelector, useDispatch } from 'react-redux';
// import { setMarkers, setZoom, setCenter } from '../reducer/slice/mapSlice';

export const MAPLayout = () => {

    // const dispatch = useDispatch();
    // const markers = useSelector((state) => state.map.markers);
    // const zoom = useSelector((state) => state.map.zoom);
    // const center = useSelector((state) => state.map.center);
    const mapRef = useRef(null);

    const [mapplsClassObject, setMapplsClassObject] = useState(null)
    const  styleMap  = {width:  '100%', height:  '100%', display:'inline-block', padding:'0', margin:'0'};


    useEffect(()=>{
        if(mapplsClassObject === null){
            const  mapProps  = { center: [28.6330, 77.2194], traffic:  false, zoom:  4, geolocation:  false, clickableIcons:  false }
            var mapplsObject=  new  mappls();
            setMapplsClassObject(mapplsObject)
        }
    },[])

    useEffect(()=>{
        if(mapplsClassObject !== null){
            mapplsClassObject.initialize("8d4096e4ba1c3cfabb2feb542bd4782c",()=>{
                let mapObjectdata = mapplsClassObject.Map({id:  "map"});
                console.log("mapObjectdata", mapObjectdata)
            });
        }
    },[mapplsClassObject,])


    return <div id="map"  style={styleMap} ref={mapRef}></div>
}


// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setMarkers, setZoom, setCenter } from '../reducer/slice/mapSlice';
// import { mappls } from 'mappls-web-maps';

// export const MAPLayout = () => {
//   const dispatch = useDispatch();
//   const markers = useSelector((state) => state.map.markers);
//   const zoom = useSelector((state) => state.map.zoom);
//   const center = useSelector((state) => state.map.center);
//   const mapRef = useRef(null);

//   const [mapplsClassObject, setMapplsClassObject] = useState(null);
//   const styleMap = { width: '100%', height: '100%', display: 'inline-block', padding: '0', margin: '0' };

//   useEffect(() => {
//     if (mapplsClassObject === null) {
//       const mapProps = { center: [28.6330, 77.2194], traffic: false, zoom: 4, geolocation: false, clickableIcons: false };
//       var mapplsObject = new mappls();
//       setMapplsClassObject(mapplsObject);
//     }
//   }, []);

//   useEffect(() => {
//     if (mapplsClassObject !== null) {
//       mapplsClassObject.initialize('8d4096e4ba1c3cfabb2feb542bd4782c', () => {
//         let mapObjectdata = mapplsClassObject.Map({ id: 'map' });

//         // Now that you have the map object, you can use it to interact with the map library.
//         // For example, you can add markers, set zoom, and center based on your Redux state.

//         // Update Redux state when map changes
//         mapObjectdata.on('moveend', () => {
//           const newZoom = mapObjectdata.getZoom();
//           const newCenter = mapObjectdata.getCenter();

//           dispatch(setZoom(newZoom));
//           dispatch(setCenter([newCenter.lat, newCenter.lng]));
//         });

//         // Update map based on Redux state
//         mapObjectdata.setZoom(zoom);
//         mapObjectdata.setView(center, zoom);
//       });
//     }
//   }, [mapplsClassObject, zoom, center, dispatch]);

//   return <div id="map" style={styleMap} ref={mapRef}></div>;
// };
