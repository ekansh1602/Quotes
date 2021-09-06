import React, { useState } from 'react';
import axios from 'axios';
import './Bored.css';


function Bored() {

    const [bored,setBored] = useState(''); 

    const getBored = () => {
        axios.get('https://www.boredapi.com/api/activity')
        .then((response) => {
          console.log(response);
          setBored(response.data.activity + ` ✨`);
        })
      }


    return (
        <div className="card">
            <h1 className="heading">{bored ? bored : `Let's Go 💥`}</h1>
            <h3></h3>
            <button className="button" onClick={getBored}>
                <span>GIVE ME AN ACTIVTY!</span>
            </button>
      </div>
    )
}

export default Bored
