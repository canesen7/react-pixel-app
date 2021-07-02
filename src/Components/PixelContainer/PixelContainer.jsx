import Row from "./Row"

const PixelContainer = (props) => {

    let width = props.width
    let height = props.height
    let backgroundColor = props.backgroundColor
    let color = props.color
    let row = []

    for (let y = 0; y < height; y++) {
        row.push(
        <Row 
            gridColor={props.gridColor}
            showGrid={props.showGrid}
            key={y}
            grid={props.grid} 
            width={width} 
            divWidth={props.divWidth}
            divHeight={props.divHeight} 
            height={height} 
            y={y} 
            backgroundColor={backgroundColor} 
            color={color}
            mouseDown={props.mouseDown}
            setMouseDown={props.setMouseDown}
            addedColors={props.addedColors}
            setAddedColors={props.setAddedColors}
            allUsedColors={props.allUsedColors}
            setAllUsedColors={props.setAllUsedColors} 
        />)
    }

    return (
        <div className={"pixel-container"} style={{ width: props.divWidth, height: props.divHeight, borderWidth: "1px 0 0 0" }}>
            {row}
        </div>
    )
}

export default PixelContainer