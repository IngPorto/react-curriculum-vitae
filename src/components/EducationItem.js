import React from "react";
import SectionDateTitleDescription from "./SectionDateTitleDescription";

function EducationItem(props){
    return(
        <div className="EducationItem">
            <SectionDateTitleDescription {...props} />
            <p>
                {
                    props.city
                }
            </p>
        </div>
    )
}

export default EducationItem;