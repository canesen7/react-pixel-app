import Input from "./Input"
import Checkbox from "./Checkbox"

const ConfigurationInputs = (props) => {
    return (
        <>
            <Input value={props.width} setValue={props.setWidth} confName={"Width"} />
            <Input value={props.height} setValue={props.setHeight} confName={"Height"} />
            <Input value={props.grid} setValue={props.setGrid} confName={"Grid"} />
            <Checkbox value={props.showGrid} setValue={props.setShowGrid}/>
        </>
    )
}

export default ConfigurationInputs