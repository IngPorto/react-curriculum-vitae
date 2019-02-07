import React from 'react';
import TextLayout from './TextLayout';

function Hobbie(props){
    const title = 'Hobbies:';
    return(
        <div className="Hobbies mdc-layout-grid__cell--span-12">
            <div className="Hobbies-title">
                <TextLayout text={title}/>
            </div>
            <p>
                {
                    props.data.map( (element, index, array) => {
                        return (` ${element}`)
                    }) + "."
                }
            </p>
        </div>
    )
}

export default Hobbie;