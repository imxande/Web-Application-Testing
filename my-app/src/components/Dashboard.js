import React from 'react';

function Dashboard(props){
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Players Name:</h2>
           <p>Strikes:  </p>
           <button>Add a strike</button>
            <p>Balls:  </p>
            <button>Add a ball</button>
        </div>
    )
}

export default Dashboard;