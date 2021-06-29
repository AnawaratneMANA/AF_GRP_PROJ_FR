import React, {useState} from "react";
import './compononet.style.css'

const CollapsComponent = () => {

    const [selected , setSelected] = useState(false)
    const handleClick = () => { setSelected(!selected)}

    return (
        <div  className={"containermain " + (selected ? "expand" : "")} onClick={handleClick}>
            <div className="upper">
                <p>main heading</p>
                <h3>
                    discription
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                    </svg>
                </h3>
            </div>
            <div className="lower">
                <p>expanded details heading</p>
                <h3>
                    expanded details des
                </h3>
            </div>
        </div>
    )
}

export default CollapsComponent