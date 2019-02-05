import React from "react";
import ListItem from './ListItem';

function SectionUnorderedList(props){
    return (
        <ul>
            {
                props.contents.map(content =>{
                    return (
                        <li>
                            <ListItem text={content}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SectionUnorderedList;