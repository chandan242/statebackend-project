export const DynamicFormField = (props) => {
    const actionFunction = props.actionFunction
    const fieldProps = props.fieldProps || [{label:"Hello1", name: "hello1", type:"text", }, {label:"Hello2", name: "hello2", type:"date", }]

    const formFieldUI = (name, type) => {
        return <input required className="form-control col" name={name} type={type} onChange={e=>onChange(e)}></input>
               
    }

    return (
        <div>  
            <form className = "m-2">
                <div className="row">
                    {fieldProps.map(item=><p className="col">{item["label"]}</p>)}
                </div>
                <div className="row">
                    {fieldProps.map(item=>formFieldUI(item["name"], item["type"]))}
                </div>
            </form>
        </div>
        )

}