import React from "react";
import SectionDateTitleDescription from "./SectionDateTitleDescription";
import SectionUnorderedList from "./SectionUnorderedList";

function ExperienceItem(props){
    return (
        <div className="ExperienceItem">
            <SectionDateTitleDescription {...props} />
            <SectionUnorderedList contents={props.activities}/>
        </div>
    )
}

export default ExperienceItem;