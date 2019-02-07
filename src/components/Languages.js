import React from 'react';
import SkillLayout from './SkillLayout';

function Languages (props){
    const titulo = 'Languages';
    return(
        <div className="Languages">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default Languages;