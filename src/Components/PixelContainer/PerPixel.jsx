import { useState } from "react"

const PerPixel = (props) => {

  let backgroundColor = props.backgroundColor
  let color = props.color

  const [pixelColor, setPixelColor] = useState(color)
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [isPixelChanged, setIsPixelChanged] = useState(false)

  const pixelStyle = {
    backgroundColor: isPixelChanged === true ? pixelColor : backgroundColor,
    border: props.showGrid === true ? `1px solid ${props.gridColor}` : "none",
    borderWidth: props.showGrid === true ? "0 1px 1px 0" : "none",
    cursor: "pointer",
    width: props.grid,
    height: props.grid,
    display: "block",
    cursor: "cell",
    boxSizing: "inherit"
  }

  const leftClickApplyColor = () => {
    setPixelColor(color)
    setCanChangeColor(false)
    setIsPixelChanged(true)
  }

  const rightClickApplyColor = () => {
    setPixelColor(backgroundColor)
    setIsPixelChanged(false)
    setCanChangeColor(false)
  }

  const applyColor = (event) => {
    if (event.type === "click") {
      leftClickApplyColor()
    }
    if (event.type === "contextmenu") {
      event.preventDefault()
      rightClickApplyColor()
    }
  }

  const changeColorOnHover = () => {
    setOldColor(isPixelChanged === true ? pixelColor : color)
    setPixelColor(color)
  }

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor)
    }

    setCanChangeColor(true)
  }

  const onMouseDown = () => {
    props.setMouseDown(true)
    leftClickApplyColor()
  }

  const onMouseUp = () => {
    props.setMouseDown(false)
    leftClickApplyColor()
  }

  const drawLine = (e) => {
    console.log(e)
    if(props.mouseDown === true && e.buttons === 1) {
      leftClickApplyColor()
    } else if(props.mouseDown === true && e.buttons === 2) {
      rightClickApplyColor()
    }
  }

  return (
    <a
      style={pixelStyle}
      className={`column-${props.x + 1} column`}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      onContextMenu={applyColor}
      onMouseDown={onMouseDown}
      onMouseOver={drawLine}
      onMouseUp={onMouseUp}>
    </a>
  )
}

export default PerPixel