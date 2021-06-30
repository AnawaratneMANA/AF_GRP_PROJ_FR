import React, {useState} from "react";
import "./Gallery.style.css"

const Tile =({data}) =>{

    const [mouseOver, setMouseOver] = useState(false);
    const [open, setOpen] = useState(false);
    let  tileStyle = {
        width: '275px',
        height: '275px'
    }
    let  tileStyle2 = {
        width: 'max-content',
        height: 'max-content',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
    }

    const mouseEnter =(e) =>{
        e.preventDefault();
        if (mouseOver === false) {
            console.log(data.name);
            setMouseOver({mouseOver: true})
        }
    }

    const mouseLeave =(e) =>{
        e.preventDefault();
        if (mouseOver === true) {
            setMouseOver({mouseOver: false})
        }
    }

    const clickHandler =(e) =>{
        e.preventDefault();
        setOpen(!open);
    }

    return(
        <div className="tile">
            <img
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onClick={clickHandler}
                src={data.image}
                alt={data.name}
                style={open ? tileStyle2 :tileStyle}
            />
        </div>
    )
}
export default Tile