import React from 'react';
import SkillLayout from './SkillLayout';

function SoftSkills(props){
    const titulo = 'Soft Skills';
    return (
        <SkillLayout {...props} title={titulo}/>
    )
}

export default SoftSkills;