export const MultiCardWidgets = () => {

    const tiles = [
        {
          count: "2262",
          description: "Rash Turning",
          bgcolor: "#6c757d",
          icon: "registered"
        },
        {
          count: "10",
          description: "Over Speed",
          bgcolor: "#dc3545",
          icon: "exclamation-circle"
        },
        {
          count: "69",
          description: "Harsh Breaking",
          bgcolor: "#28a745",
          icon: "times-circle"
        },
        {
          count: "86",
          description: "Harsh Acceleration",
          bgcolor: "#ec862e",
          icon: "user-times"
        },
        {
          count: "11",
          description: "Device Tampered",
          bgcolor: "#17a2b8",
          icon: "check-circle"
        },
        {
            count: "8",
            description: "Low Battery",
            bgcolor: "#17a2b8",
            icon: "check-circle"
        }
      ];
      
    const cardView = (data,index) => {
        return (
            <div className="col row m-1" style={{backgroundColor:data["bgcolor"], borderRadius:"5px"}} key={index}>
                <div className="col-sm-3 mx-0 my-auto p-1">Icon</div>
                <div className="col-9  m-0 p-1">
                    <p style={{fontSize:"0.7rem"}}><b>{data["description"]}</b></p>
                    <h4><b>{data["count"]}</b></h4>
                    <hr></hr>
                    <div className="row">
                        <p className="col-8" style={{fontSize:"0.7rem"}}>More Info</p>
                        <p className="col-3" style={{fontSize:"0.7rem"}}>Click</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="row">
            {tiles.map((item,index)=>cardView(item,index))}    
        </div>)
}