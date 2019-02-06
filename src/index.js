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
import Complementary from './containers/Complementary';
import PersonalInfo from './components/PersonalInfo';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';

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
                    <Complementary>
                        <PersonalInfo data={data.body.complementary.personalInfo} />
                        <HardSkills data={data.body.complementary.hardSkills}/>
                        <SoftSkills data={data.body.complementary.softSkills}/>
                        <Languages data={data.body.complementary.languages}/>
                    </Complementary>
                </Body>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>, 
    document.getElementById('main')
);
