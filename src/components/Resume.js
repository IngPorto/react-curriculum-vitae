import React from "react";
import TextLayout from './TextLayout'

function Resume(props){
    return(
        <div className="Resume">
            <TextLayout 
                text={props.text}
            />
        </div>
    )
}

export default Resume;