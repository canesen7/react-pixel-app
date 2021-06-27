import PerPixel from "./PerPixel"

const Row = (props) => {

    let row = []
    let grid = props.grid
    let backgroundColor = props.backgroundColor
    let color = props.color

    for (let x = 0; x < props.width; x++) {
        row.push(
            <PerPixel
                gridColor={props.gridColor}
                mouseDown={props.mouseDown}
                setMouseDown={props.setMouseDown} 
                showGrid={props.showGrid}
                key={x}
                divWidth={props.divWidth}
                divHeight={props.divHeight}
                grid={props.grid} 
                x={x}
                y={props.y}
                width={props.width}
                height={props.height}
                backgroundColor={backgroundColor}
                color={color} 
            />)
    }

    return (
        <div style={{ width: grid, height: grid }} className={`row-${props.y + 1} per-row`}> {row} </div>
    )
}

export default Row