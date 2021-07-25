const Input = (props) => {
    return (
        <div className={"main-input-container"}>
            <div className={"input-container"}>
                <span className={"next"} onClick={() => props.setValue(props.value + 1)}></span>
                <span className={"prev"} onClick={() => props.setValue(props.value - 1)}></span>
                <div id={"box"}>
                    <span>{props.value}</span>
                </div>
            </div>
            {props.confName}
        </div>
    )
}

export default Input