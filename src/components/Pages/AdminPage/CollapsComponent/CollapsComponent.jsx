import React, {useState} from "react";
import './compononet.style.css'

const CollapsComponent = () => {

    const [selected , setSelected] = useState(false)
    handleClick = () => { setSelected(!selected)}

    return (
        <div  className={"container " + (selected ? "expand" : "")} onClick={this.handleClick}>
            <div className="upper">
                <p>June 10</p>
                <h3>
                    A family saga with a supernatural twist, set in a German town, where
                    the disappearance of two young children exposes
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                    </svg>
                </h3>
            </div>
            <div className="lower">
                <p>June 10</p>
                <h3>
                    A family saga with a supernatural twist, set in a German town, where
                    the disappearance of two young children exposes...
                </h3>

                <h4>All News</h4>
            </div>
        </div>
    )
}

export default CollapsComponent