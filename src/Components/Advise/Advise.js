import React, { useState } from 'react';
import axios from 'axios';
import './Advise.css';


function Advise() {


  const [advice,setAdvice] = useState('');

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      console.log(response);
      setAdvice(response.data.slip.advice + ` ✨`);
    })
  }

    return (
        <>
          <div className="card">
            <h1 className="heading">{advice ? advice : `Let's Go 💥`}</h1>
            <h3></h3>
              <button className="button" onClick={getAdvice}>
                <span>GIVE ME AN ADVICE!</span>
              </button>
          </div>
        </>
    )
}

export default Advise
