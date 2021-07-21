import { useState } from "react"
import MainColors from "./MainColors"
import AddedColors from "./AddedColors"

const ConfBar = (props) => {
    const [showBGPicker, setShowBGPicker] = useState(false)
    const setShowBGPickerDisplay = showBGPicker ? "" : "none"
    const [showColorPicker, setShowColorPicker] = useState(false)
    const setShowColorPickerDisplay = showColorPicker ? "" : "none"
    const [showGridColorPicker, setShowGridColorPicker] = useState(false)
    const setShowGridPickerDisplay = showGridColorPicker ? "" : "none"

    const publicChangeColor = (color, pluginName) => {
        if (pluginName === "background") {
            props.setBackgroundColor(color)
        } else if (pluginName === "paletteColor") {
            props.setColor(color)
        } else {
            props.setGridColor(color)
        }
    }

    const changeConfiguration = () => {
        props.setOpenConfiguration(!props.openConfiguration)
    }

    const publicShowColor = pluginName => {
        if (pluginName === "background") {
            setShowBGPicker(!showBGPicker)
            setShowColorPicker(false)
            setShowGridColorPicker(false)
        } else if (pluginName === "paletteColor") {
            setShowColorPicker(!showColorPicker)
            setShowBGPicker(false)
            setShowGridColorPicker(false)
        } else {
            setShowGridColorPicker(!showGridColorPicker)
            setShowColorPicker(false)
            setShowBGPicker(false)
        }
    }

    const pickerList = [{
        name: "background",
        background: props.backgroundColor,
        showValue: showBGPicker,
        displayControl: setShowBGPickerDisplay,
        color: props.backgroundColor
    },
    {
        name: "paletteColor",
        background: props.color,
        showValue: showColorPicker,
        displayControl: setShowColorPickerDisplay,
        color: props.color
    },
    {
        name: "gridColor",
        background: props.gridColor,
        showValue: showGridColorPicker,
        displayControl: setShowGridPickerDisplay,
        color: props.gridColor
    },

    ]

    return (
        <div className={props.openConfiguration === true ? "conf-container open-configuration-container" : "conf-container close-configuration-container"} style={{bottom: props.openConfiguration === true ? "0px" : "-99px"}}>
            <div className={"open-close-button"}>
                <div className={"open-close-button-inside"} onClick={changeConfiguration}></div>
            </div>
            <div className="color-container">
                <MainColors pickerList={pickerList} publicShowColor={publicShowColor} publicChangeColor={publicChangeColor} />
                <AddedColors addedColors={props.addedColors} setColor={props.setColor} />
            </div>
        </div>
    )
}

export default ConfBar