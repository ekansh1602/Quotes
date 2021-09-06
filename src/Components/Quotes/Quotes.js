import React, { useState } from 'react';
import axios from 'axios';
import './Quotes.css';


function Quotes() {

    const [quote,setQuote] = useState('');

    const getQuote = async () => {
        var randomNumber = Math.floor(Math.random() * (1643-1 + 1)) + 1;
        await axios.get('https://type.fit/api/quotes')
        .then(response => {
            setQuote(response.data[randomNumber].text + ' ☘️')
            //console.log(response.data[randomNumber]);
        })
    }


    return (
        <>
            <div className="card">
                <h1 className="heading">{quote ? quote  : `Let's Go 💥`}</h1>
                <h3></h3>
                <button className="button" onClick={getQuote}>
                    <span>GIVE ME TODAY'S QUOTE!</span>
                </button>
            </div>
        </>
    )
}

export default Quotes
