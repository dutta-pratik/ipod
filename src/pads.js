import React from'react';
import './ipod.css'

const Pads = (props) => {
    // console.log("props", props);
    return(
        <div unselectable="off" id="menu" className="controls" onClick={props.scroll}>
            <button id="menu-button" className="buttons" onClick={props.mainScr}>MENU</button>
            
            <div >
                <button className="small-button" onClick={props.optn}></button>
            </div>

        </div>
    );
    
}

export default Pads;