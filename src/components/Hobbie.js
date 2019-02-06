import React from 'react';

function Hobbie(props){
    const title = 'Hobbies';
    return(
        <div className="Hobbies mdc-layout-grid__cell--span-12">
            <p>
                {
                    `${title}: ` + 
                    props.data.map( (element, index, array) => {
                        return (` ${element}`)
                    }) + "."
                }
            </p>
        </div>
    )
}

export default Hobbie;