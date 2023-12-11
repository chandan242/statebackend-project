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
      } catch (error) {
        console.error('API error:', error);
      }
    }
    fetchData();

  }, []);
  
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