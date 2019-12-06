import React from 'react';

function DashBoard(){
    return(
        <div className = 'dashboard'>
            <h1>Dashboard</h1>
            <h2>My Player</h2>
            <button>Add a strike</button>
            <button>Add a ball</button>
            <button>Add a foul</button>
            <button>Add a hit</button>
        </div>
    )
}

export default DashBoard;