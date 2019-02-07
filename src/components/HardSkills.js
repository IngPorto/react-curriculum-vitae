import React from 'react';
import SkillLayout from './SkillLayout';

function HardSkills(props){
    const titulo = 'Hard Skills';
    return(
        <div className="HardSkills">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default HardSkills;
