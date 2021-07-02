import { ChromePicker } from 'react-color';

const MainColors = (props) => {
    return(
        <div className={"colors"}>
        {props.pickerList.map((picker, i) => (
            <div className="conf" key={i} style={{marginRight: i === 2 ? "" : "10px"}}>
                <div style={{ background: picker.color, width: picker.name === "paletteColor" ? "50px" : "35px", height: picker.name === "paletteColor" ? "50px" : "35px" }} className="color-picker" onClick={() => props.publicShowColor(picker.name)}></div>
                <div style={{ display: picker.displayControl, position: "absolute", top: i === 1 ? "-220px" : "-215px" }}>
                    <ChromePicker disableAlpha={true} style={{ display: picker.displayControl }} color={picker.color} onChange={(e) => props.publicChangeColor(e.hex, picker.name)} />
                </div>
            </div>
        ))}
    </div>
    )
}

export default MainColors