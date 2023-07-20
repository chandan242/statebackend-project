import {useRef} from "react"
import {Alerts} from "../../components/alertsWidget"
import {MultiCardWidgets} from "../../components/multiCardWidget.jsx"
import { MAPLayout } from "../../components/map.jsx"

export const DashBoard = (props) => {

    const mapRef = useRef(null);

    return (<div>
                <MultiCardWidgets/>
                <div className="row">
                    <div className="col-lg-8 m-0" ref={mapRef}>
                        <MAPLayout/>
                    </div>
                    <div className="col-lg-4 m-0">
                        <Alerts/>
                    </div>
                </div>
            </div>)
}