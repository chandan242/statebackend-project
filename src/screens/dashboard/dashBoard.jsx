import { useEffect, useRef ,useState} from "react";
import { Alerts } from "../../components/alertsWidget";
import { MultiCardWidgets } from "../../components/multiCardWidget.jsx";
import { MAPLayout } from "../../components/map.jsx";
import { useSelector } from "react-redux";
import getAccessToken from "../../apis/outpostapi";// import { getToken } from "../../apis/outpostapi";

export const DashBoard = (props) => {
    let { navigationOpen } = useSelector((state) => state.common);
  const mapRef = useRef(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAccessToken();
        console.log("dataaaa",data);
        console.log("ACcess Tokennnnnnnnnn",data.access_token);
        setAccessToken(data.access_token);
        // Handle the data or any other logic here
      } catch (error) {
        console.error('API error:', error);
        // Handle errors here
      }
    }
    fetchData();
    
  }, []);
  // useEffect(() => {
  //   console.log("!11111111111111111");
  //   const fetchToken = async () => {
  //     try {
  //       console.log("222222222222222");
  //       // const response = await fetch('https://outpost.mapmyindia.com/api/security/oauth/token', {
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/x-www-form-urlencoded'
  //       //   },
  //       //   body: new URLSearchParams({
  //           // grant_type: 'client_credentials',
  //           // client_id: '33OkryzDZsI6zffdbNB9YyDNAmelVSXDKSkJLtIewBqnSWSL7G00JjLOmkbk2_lnLq--lTIRujdaUcHN-bQjzYsArtDL_pYj',
  //           // client_secret: 'lrFxI-iSEg8SoKZacRf0sf3O3g4CcSDYVBjx1ULzenLsFzpntO9B20Ku62oHo63-kuEtTuxFFbXDsjNHE8A2aggVmHcXmqP4yTjcYHwro7Q='
  //       //   })
  //       // });
  //       const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           grant_type: 'client_credentials',
  //           client_id: '33OkryzDZsI6zffdbNB9YyDNAmelVSXDKSkJLtIewBqnSWSL7G00JjLOmkbk2_lnLq--lTIRujdaUcHN-bQjzYsArtDL_pYj',
  //           client_secret: 'lrFxI-iSEg8SoKZacRf0sf3O3g4CcSDYVBjx1ULzenLsFzpntO9B20Ku62oHo63-kuEtTuxFFbXDsjNHE8A2aggVmHcXmqP4yTjcYHwro7Q='
  //         }),
  //       };
  //       console.log("333333333333333333333");
  //       const response = await fetch("https://outpost.mapmyindia.com/api/security/oauth/token", requestOptions)
  //       console.log("Responsewdwdw",response);
  //       const data = await response.json();
  //       console.log("dataaaaaaaaaaaa",data);
  //       console.log(data.access_token);
  //       setToken(data.access_token);
  //       console.log("Token fetched successfully");
  //       if (response.ok) {
  //       } else {
  //         console.log("444444444444444444444");
  //         console.error('Error fetching token:', response.statusText);
  //       }
  //     } catch (error) {
  //       console.log("555555555555555555555555555");
  //       console.error('Error fetching token:', error);
  //     }
  //   };

  //   fetchToken();
  // }, []);

  return (
    <div className={navigationOpen ? "map-container-shrink" : "map-container-expand"}>
      <MultiCardWidgets/>
      <div className="map-alert-container">
        <div className="map-container" ref={mapRef}>
          <MAPLayout/>
        </div>
        <div className="alert-container">
          <Alerts/>
        </div>
      </div>
    </div>
  );
};