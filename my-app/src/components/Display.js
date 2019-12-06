import React from 'react';

function Display(props){
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Players Name:</h2>
            <p>Strikes: 0  </p>
            <button>Add a strike</button>
            <p>Balls: 0 </p>
            <button>Add a ball</button>
        </div>
    )
}

export default Display;