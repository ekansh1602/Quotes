import React, { useState } from 'react';
import axios from 'axios';
import './Jokes.css';

function Jokes() {

    const [joke,setJoke] = useState('');
    const [jokePunch,setJokePunch] = useState('');

    const getJoke = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            setJoke(response.data.setup)
            setJokePunch(response.data.punchline);
        })
    }



    return (
        <>
            <div className="card">
                <h1 className="heading">{joke ? joke : `Let's Go 💥`}</h1>
                <h3 style={{color: 'red', fontFamily: 'Sans-serif', fontWeight: 'normal'}}>{jokePunch}</h3>
                <button className="button" onClick={getJoke}>
                    <span>GIVE ME A JOKE!</span>
                </button>
            </div> 
        </>
    )
}

export default Jokes
