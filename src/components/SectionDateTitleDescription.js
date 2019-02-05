import React from "react";
import TextLayout from './TextLayout';

function SectionDateTitleDescription(props){
    return(
        <div>
            <TextLayout text={props.date}/>
            <TextLayout text={props.title}/>
            <TextLayout text={props.entity}/>
        </div>
    )
}

export default SectionDateTitleDescription;