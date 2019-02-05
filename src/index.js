import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {data} from './data';
import Header from './containers/Header';
import Body from './containers/Body';
import Principal from './containers/Principal';
import Resume from './components/Resume';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Hobbie from './components/Hobbie';

class Main extends Component{
    render(){
        return (
            <div>
                <Header 
                    name= {data.header.name}
                    profession= {data.header.profession}
                    location= {data.header.location}
                />
                <Body>
                    <Principal>
                        <Resume text={data.body.principal.resume}/>
                        <ProfessionalExperience data={data.body.principal.professionalExperience}/>
                        <Education data={data.body.principal.education}/>
                        <Hobbie data={data.body.principal.hobbies}/>
                    </Principal>
                    {/*<Complementary>
                        <PersonalInfo />
                        <HardSkills />
                        <SoftSkills />
                        <Languages />
                    </Complementary>*/}
                </Body>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>, 
    document.getElementById('main')
);
