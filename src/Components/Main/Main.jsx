import LeftBar from "../LeftBar/LeftBar"
import PixelContainer from "../PixelContainer/PixelContainer";
import { useState, useEffect } from "react";
import { SketchPicker } from 'react-color';
import "./main.css"
import $ from "jquery"

const App = () => {
  const [grid, setGrid] = useState(10)
  const [showGrid, setShowGrid] = useState(true)
  const [width, setWidth] = useState(30)
  const [height, setHeight] = useState(30)
  const [divWidth, setDivWith] = useState(width * grid)
  const [divHeight, setDivHeight] = useState(height * grid)
  const [backgroundColor, setBackgroundColor] = useState("black")
  const [color, setColor] = useState("white")
  const [gridColor, setGridColor] = useState("#585858")

  const [mouseDown, setMouseDown] = useState(false)

  useEffect(() => {
    $(".column").css("height", grid).css("width", grid)
    $(".per-row").css("height", grid).css("width", grid)
    setDivHeight(height * grid)
    setDivWith(width * grid)
  }, [grid, height, width]);

  return (
    <div className="container">
      <PixelContainer
        width={width}
        height={height}
        divWidth={divWidth}
        divHeight={divHeight}
        grid={grid}
        gridColor={gridColor}
        backgroundColor={backgroundColor}
        color={color} 
        showGrid={showGrid}
        mouseDown={mouseDown}
        setMouseDown={setMouseDown}/>

      <input type="range" className="form-range" min="10" max="50" step="1" id="customRange3" defaultValue={width} onChange={(e) => setWidth(e.target.value)} />
      <input type="range" className="form-range" min="10" max="50" step="1" id="customRange3" defaultValue={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="range" className="form-range" min="1" max="25" step="1" id="customRange3" defaultValue={grid} onChange={(e) => setGrid(e.target.value)} />
      <SketchPicker color={backgroundColor} onChange={(e) => setBackgroundColor(e.hex)} />
      <SketchPicker color={color} onChange={(e) => setColor(e.hex)} />
      <LeftBar />
    </div>
  );
}

export default App;
