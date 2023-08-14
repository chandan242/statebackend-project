import { GiReturnArrow } from "react-icons/gi";
import { MdSpeed } from "react-icons/md";
import {VscDebugBreakpointUnsupported} from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa";
import { BiSolidBatteryLow } from "react-icons/bi";
import {SiTampermonkey} from "react-icons/si";
import { useSelector } from "react-redux";

export const MultiCardWidgets = () => {
  let { navigationOpen } = useSelector((state) => state.common);

    const tiles = [
        {
          count: "2262",
          description: "Rash Turning",
          // bgcolor: "#7b808a",
          icon: <GiReturnArrow  size={50} fill="#424242"/>
        },
        {
          count: "10",
          description: "Over Speed",
          // bgcolor: "#d16262",
          icon: <MdSpeed size={50} fill="red"/>
        },
        {
          count: "69",
          description: "Harsh Breaking",
          // bgcolor: "#62d19f",
          icon: <VscDebugBreakpointUnsupported size={63} fill="green"/>
        },
        {
          count: "86",
          description: "Harsh Acceleration",
          // bgcolor: "#f0a667",
          icon: <FaStackOverflow size={50} fill="#ab9505"/>
        },
        {
          count: "11",
          description: "Device Tampered",
          // bgcolor: "#41d6e0",
          icon: <SiTampermonkey size={50} fill="#07827a"/>
        },
        {
            count: "8",
            description: "Low Battery",
            // bgcolor: "#c78cfa",
            icon: <BiSolidBatteryLow size={50} fill="red"/>
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
                <hr style={{height:"2px",backgroundColor:"grey"}}></hr>
              </div>
                <div className="widget-card-btn-ctn">
                    <p className="">More Info</p>
                    <p className="widgrt-card-click">Click</p>
                </div>
            </div>
        )
    }

    return(
        <div className={navigationOpen?"multi-card-container":"multi-card-container-expand"}>
            {tiles.map(item=>cardView(item))}    
        </div>
        )
}