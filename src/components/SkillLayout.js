import React from 'react';
import TopicSection from '../containers/TopicSection';
import ElementAndLevel from './ElementAndLevel';

function SkillLayout(props){
    return(
        <TopicSection title={props.title}>
            {
                props.data.map(element =>{
                    return(
                        <ElementAndLevel {...element} />
                    )
                })
            }
        </TopicSection>
    )
}

export default SkillLayout;