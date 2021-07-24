import OpenCloseButton from "./OpenCloseButton"
import Colors from "./Colors"

const ConfBar = (props) => {

    return (
        <div className={props.openConfiguration === true ? "conf-container open-configuration-container" : "conf-container close-configuration-container"} style={{ bottom: props.openConfiguration === true ? "0px" : "-99px" }}>
            <OpenCloseButton openConfiguration={props.openConfiguration} setOpenConfiguration={props.setOpenConfiguration}/>
            <div className={"conf-area"}>asdf</div>
            <div className={"conf-area"}>
                <Colors 
                    setBackgroundColor={props.setBackgroundColor}
                    setColor={props.setColor}
                    setGridColor={props.setGridColor}
                    backgroundColor={props.backgroundColor}
                    color={props.color}
                    gridColor={props.gridColor}
                    addedColors={props.addedColors}/>
            </div>
            <div className={"conf-area"}>asdf</div>
        </div>
    )
}

export default ConfBar