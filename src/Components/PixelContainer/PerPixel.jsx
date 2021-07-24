import { useEffect, useState } from "react"

const PerPixel = (props) => {

  let backgroundColor = props.backgroundColor
  let color = props.color

  const [pixelColor, setPixelColor] = useState(color)
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isPixelChanged, setIsPixelChanged] = useState(false)

  const pixelStyle = {
    backgroundColor: isPixelChanged === true ? pixelColor : isHovered === true ? pixelColor : backgroundColor,
    border: props.showGrid === true ? `1px solid ${props.gridColor}` : "none",
    borderWidth: props.showGrid === true ? props.x === 0 && props.y === 0 ? "1px 1px 1px" : props.x === 0 ? "0 1px 1px 1px" : props.y === 0 ? "1px 1px 1px 0px" : "0px 1px 1px 0px" : "none",
    cursor: "pointer",
    width: props.grid,
    height: props.grid,
    display: "block",
    cursor: "cell",
    boxSizing: "inherit"
  }

  const checkColorAddedBefore = (color) => {
    const newColorList = new Set(props.addedColors);

    if (newColorList.has(color) != true && props.addedColors.length < 7) {
      props.setAddedColors([...props.addedColors, color])
    }
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
    setCanChangeColor(true)
    setIsHovered(true)
  }

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor)
    }

    setCanChangeColor(true)
    setIsHovered(false)
  }

  const onMouseDown = () => {
    props.setMouseDown(true)
    leftClickApplyColor()
    checkColorAddedBefore(color)
  }

  const onMouseUp = () => {
    props.setMouseDown(false)
    leftClickApplyColor()
  }

  const drawLine = (e) => {
    if (props.mouseDown === true && e.buttons === 1) {
      leftClickApplyColor()
    } else if (props.mouseDown === true && e.buttons === 2) {
      rightClickApplyColor()
    }
  }

  return (
    <div
      style={pixelStyle}
      className={`column-${props.x + 1} column`}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      onContextMenu={applyColor}
      onMouseDown={onMouseDown}
      onMouseOver={drawLine}
      onMouseUp={onMouseUp}>
    </div>
  )
}

export default PerPixel