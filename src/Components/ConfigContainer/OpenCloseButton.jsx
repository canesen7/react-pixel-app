import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const OpenCloseButton = (props) => {
    const iconStyle = {
        width: "30px",
        height: "30px",
        color: "white",
        position: "relative",
        top: "3px",
    }
    
    const changeConfiguration = () => {
        props.setOpenConfiguration(!props.openConfiguration)
    }
    
    return (
        <div className={"open-close-button"}>
            <div className={"open-close-button-inside"} onClick={changeConfiguration}>
                <FontAwesomeIcon icon={props.openConfiguration === true ? faChevronDown : faChevronUp} style={iconStyle} className={props.openConfiguration === true ? "open-configuration-button" : "close-configuration-button"} />
            </div>
        </div>
    )
}

export default OpenCloseButton