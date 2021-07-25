import OpenCloseButton from "./OpenCloseButton"
import Colors from "./Colors"
import ConfigurationInputs from "./ConfigurationInputs"

const ConfBar = (props) => {

    return (
        <div className={props.openConfiguration === true ? "conf-container open-configuration-container" : "conf-container close-configuration-container"} style={{ bottom: props.openConfiguration === true ? "0px" : "-99px" }}>
            <OpenCloseButton openConfiguration={props.openConfiguration} setOpenConfiguration={props.setOpenConfiguration} />
            <div className={"conf-area"} style={{ display: "flex" }}>
                <ConfigurationInputs 
                    width={props.width} 
                    setWidth={props.setWidth} 
                    height={props.height}
                    setHeight={props.setHeight}
                    grid={props.grid}
                    setGrid={props.setGrid}
                    showGrid={props.showGrid}
                    setShowGrid={props.setShowGrid}/>
            </div>
            <div className={"conf-area"}>
                <Colors
                    setBackgroundColor={props.setBackgroundColor}
                    setColor={props.setColor}
                    setGridColor={props.setGridColor}
                    backgroundColor={props.backgroundColor}
                    color={props.color}
                    gridColor={props.gridColor}
                    addedColors={props.addedColors} />
            </div>
            <div className={"conf-area"}>

            </div>
        </div>
    )
}

export default ConfBar