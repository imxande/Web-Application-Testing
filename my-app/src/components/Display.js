import React from 'react';
import DashBoard from './DashBoard';

function Display(props){
    return(
        <div className = 'display'>
            <DashBoard />
            <p>Strikes: {props.strikes}  </p>
            <p>Balls: {props.balls} </p>
            <p>Foul: {props.foul} </p>
            <p>Hit: {props.hit} </p>
        </div>
    )
}

export default Display;