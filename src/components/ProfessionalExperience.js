import React from "react";
import TopicSection from '../containers/TopicSection'
import ExperienceItem from './ExperienceItem';

function ProfessionalExperience(props){
    const titulo = 'Professional Experience';

    return (
        <div className="ProfessionalExperience">
            <TopicSection title={titulo}>
                {
                    /* @Possible_Enhance
                    Podría poner esta sección en otro componente 
                    llamado RowGenerator, pero estaría muy acoplado al 
                    componente ExperienceItem porque compartirían 
                    las mismas propiedades y no podria ser usado por 
                    otro componente
                    */
                    props.data.map(content =>{
                        return (
                            <ExperienceItem 
                                title={content.title}
                                date={content.date}
                                entity={content.entity}
                                activities={content.activities}
                            />
                        )
                    })
                }
            </TopicSection>
        </div>
    )
}


export default ProfessionalExperience;