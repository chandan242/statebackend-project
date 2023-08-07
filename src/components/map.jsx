import { useState, useEffect, useRef } from 'react';
import { mappls } from 'mappls-web-maps';

export const MAPLayout = () => {
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
