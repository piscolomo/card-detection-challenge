import { useState } from 'react';
import detectNetwork from '../lib/cards.js';

export default function NewCard(){
    const [state, setState] = useState({});

    function handleChange(e){
        let cardType = detectNetwork(e.target.value);
        setState({
            cardType: cardType,
            status: ((cardType == "Invalid Card") ? "error" : "ok")
        })
    }

    return (
        <div>
            <h3>Insert your card number:</h3>
            <input id="card-number" type="text" onChange={handleChange} placeholder="Type a Card Number..."/>
            <span className={state.status} id="card-type">{state.cardType}</span>
        </div>
    )
}