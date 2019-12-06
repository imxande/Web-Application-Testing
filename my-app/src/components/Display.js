import React from 'react';

function Display(props){
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>My Player</h2>
            <p>Strikes: {props.strikes}  </p>
            <button>Add a strike</button>
            <p>Balls: {props.balls} </p>
            <button>Add a ball</button>
        </div>
    )
}

export default Display;