import React from 'react';
import TopicSection from '../containers/TopicSection';
import SectionTitleShortDescription from './SectionTitleShortDescription';

function PersonalInfo(props){
    const titulo = 'Personal info';
    const mobileTitle = 'Mobile';
    const emailTitle = 'E-mail';
    const idcardTitle = 'Id-card';
    const githubTitle = 'GitHub';
    const linkedinTitle = 'Linkedin';
    const idcardDescription = `${props.data.id.number} de ${props.data.id.city}`;
    return(
        <div className="PersonalInfo">
            <TopicSection title={titulo}>
                <SectionTitleShortDescription
                    title={mobileTitle}
                    description={props.data.mobile} 
                />
                <SectionTitleShortDescription
                    title={emailTitle}
                    description={props.data.email} 
                />
                <SectionTitleShortDescription
                    title={idcardTitle}
                    description={idcardDescription} 
                />

                <a href={props.data.git} target="_blank">
                    <SectionTitleShortDescription
                        title={githubTitle}
                        description={props.data.git} 
                    />
                </a>

                <a href={props.data.linkedin} target="_blank">
                    <SectionTitleShortDescription
                        title={linkedinTitle}
                        description={props.data.linkedin} 
                    />
                </a>
            </TopicSection>
        </div>
    )
}

export default PersonalInfo;