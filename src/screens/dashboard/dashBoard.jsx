import { useRef } from "react";
import { Alerts } from "../../components/alertsWidget";
import { MultiCardWidgets } from "../../components/multiCardWidget.jsx";
import { MAPLayout } from "../../components/map.jsx";
import { useSelector } from "react-redux";

export const DashBoard = (props) => {
    let { navigationOpen } = useSelector((state) => state.common);
  const mapRef = useRef(null);

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