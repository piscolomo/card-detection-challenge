import { useState } from 'react';
import detectNetwork from '../lib/cards.js';

export default function NewCard(props){
    const [cardType, setCardType] = useState();

    function handleChange(e){
        setCardType(detectNetwork(e.target.value));
    }

    return (
        <div>
            <h3>Insert your card number:</h3>
            <input id="card-number" type="text" onChange={handleChange} />
            <span id="card-type">{cardType}</span>
        </div>
    )
}