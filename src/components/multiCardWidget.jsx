import { GiReturnArrow } from "react-icons/gi";
import { MdSpeed } from "react-icons/md";
import {VscDebugBreakpointUnsupported} from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa";
import { BiSolidBatteryLow } from "react-icons/bi";
import {SiTampermonkey} from "react-icons/si";

export const MultiCardWidgets = () => {

    const tiles = [
        {
          count: "2262",
          description: "Rash Turning",
          bgcolor: "#a7a8a8",
          icon: <GiReturnArrow  size={35}/>
        },
        {
          count: "10",
          description: "Over Speed",
          bgcolor: "#f5717d",
          icon: <MdSpeed size={35}/>
        },
        {
          count: "69",
          description: "Harsh Breaking",
          bgcolor: "#8df2a4",
          icon: <VscDebugBreakpointUnsupported size={35}/>
        },
        {
          count: "86",
          description: "Harsh Acceleration",
          bgcolor: "#f0a667",
          icon: <FaStackOverflow size={35}/>
        },
        {
          count: "11",
          description: "Device Tampered",
          bgcolor: "#7ee7f7",
          icon: <SiTampermonkey size={35}/>
        },
        {
            count: "8",
            description: "Low Battery",
            bgcolor: "#c78cfa",
            icon: <BiSolidBatteryLow size={35}/>
        }
      ];
      
    const cardView = (data) => {
        return (
            <div className="card-widget"  style={{backgroundColor:data["bgcolor"]}}>
              <div className="multi-card-item">
                  <p className="card-item-desc">{data["description"]}</p>
                  <div className="card-item-icon">{data["icon"]}</div>
              </div>
              <div className="card-item-count">
                <p>{data["count"]}</p>
                <hr></hr>
              </div>
                <div className="widget-card-btn-ctn">
                    <p className="">More Info</p>
                    <p className="">Click</p>
                </div>
            </div>
        )
    }

    return(
        <div className="multi-card-container">
            {tiles.map(item=>cardView(item))}    
        </div>
        )
}