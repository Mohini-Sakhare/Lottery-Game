

import { useState } from "react";
import {genTicket} from "./helper.js";
import Ticket from "./Ticket.jsx";
 

export default function Lottery({n=3,winCondition}){
       let [ticket, setTicket]=useState(genTicket(n));
       let isWinning=winCondition(ticket);
       
       let buyTicket=()=>{
        setTicket(genTicket(n));
       };

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy the Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}