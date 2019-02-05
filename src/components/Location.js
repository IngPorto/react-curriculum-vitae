import React from 'react'

function Location(props){
    return(
        <div className="Location">
            <p>Location:</p>
            <p>{props.location}</p>
        </div>
    )
}

export default Location;