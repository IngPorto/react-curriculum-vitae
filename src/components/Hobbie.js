import React from 'react';

function Hobbie(props){
    const title = 'Hobbies';
    return(
        <p>
            {
                `${title}: ` + 
                props.data.map( (element, index, array) => {
                    return (element + (index < array.length ? ',':'.'))
                })
            }
        </p>
    )
}

export default Hobbie;