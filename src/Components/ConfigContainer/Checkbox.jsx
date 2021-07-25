const Checkbox = (props) => {
    return (
        <div className={"checkbox-container"}>
            <input type="checkbox" name="" defaultChecked={props.value} className={"checkbox-config"} onChange={() => props.setValue(!props.value)}/>
        </div>
    )
}

export default Checkbox