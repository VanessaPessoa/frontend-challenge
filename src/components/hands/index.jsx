import React from "react";
import Paper from "../../assets/paper.png";
import Rock from "../../assets/rock.png";
import Scissor from "../../assets/scissor.png";

const Hands = ({type, setType}) => {
    const typeHands = {
        paper: Paper,
        rock: Rock,
        scissor: Scissor
    }

    return(
        <button onClick={() => setType(type)}> <img src={typeHands[type]} alt="" />  </button>
    )
}

export default Hands;