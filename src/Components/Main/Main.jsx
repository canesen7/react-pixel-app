import ConfBar from "../ConfigContainer/ConfBar"
import PixelContainer from "../PixelContainer/PixelContainer";
import { useState, useEffect } from "react";
import "./main.css"
import $ from "jquery"

const App = () => {
  const [grid, setGrid] = useState(40)
  const [showGrid, setShowGrid] = useState(true)
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16)
  const [divWidth, setDivWith] = useState(width * grid)
  const [divHeight, setDivHeight] = useState(height * grid)
  const [backgroundColor, setBackgroundColor] = useState("black")
  const [color, setColor] = useState("#ffff")
  const [gridColor, setGridColor] = useState("#585858")
  const [openConfiguration, setOpenConfiguration] = useState(true)
  const [addedColors, setAddedColors] = useState([])
  const [allUsedColors, setAllUsedColors] = useState([])
  const [showBackgroundColor, setShowBackgroundColor] = useState(false)

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
        setMouseDown={setMouseDown}
        addedColors={addedColors}
        setAddedColors={setAddedColors}
        allUsedColors={allUsedColors}
        setAllUsedColors={setAllUsedColors}
        showBackgroundColor={showBackgroundColor}
        setShowBackgroundColor={setShowBackgroundColor}/>
      <ConfBar 
        addedColors={addedColors}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        color={color}
        setColor={setColor}
        gridColor={gridColor}
        setGridColor={setGridColor}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        openConfiguration={openConfiguration}
        setOpenConfiguration={setOpenConfiguration}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        grid={grid}
        setGrid={setGrid}/>
    </div>
  );
}

export default App;
