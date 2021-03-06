const AddedColors = (props) => {
    return (
        <div className={"added-colors"}>
            {props.addedColors.map((color, i) => (
                <div key={i} className={"color"} style={{background: color}} onClick={() => props.setColor(color)}></div>
            ))}
        </div>
    )
}

export default AddedColors