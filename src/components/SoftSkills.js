import React from 'react';
import SkillLayout from './SkillLayout';

function SoftSkills(props){
    const titulo = 'Soft Skills';
    return (
        <div className="SoftSkills">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default SoftSkills;