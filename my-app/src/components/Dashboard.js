import React from 'react';


function DashBoard(props){
    return(
        <div className = 'dashboard'>
            <h1>At bat</h1>
            <h2>My Player</h2>
            <button onClick={props.addStrike}>Add a strike</button>
            <button onClick={props.addBall}>Add a ball</button>
            <button onClick={props.addFoul}>Oh so close!! Its a Foul</button>
            <button onClick={props.addHit}>Is A HIT!</button>
        </div>
    )
}

export default DashBoard;