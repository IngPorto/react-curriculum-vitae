import React from 'react';
import SkillLayout from './SkillLayout';

function SoftSkills(props){
    const titulo = 'Soft Skills';
    return (
        <div className="SoftSkills mdc-layout-grid__cell--span-12">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default SoftSkills;