/**
 * How document components in React
 * Top-Level guide for react:
 * https://reactjs.org/docs/react-api.html#createelement
 */
import React from 'react'

function LevelProgressGenerator(props){
    const aptness = [
            'Beginner', 
            'Basic', 
            'Intermediate', 
            'Advanced', 
            'Expert'
        ]
    const level = props.level;
    return(
        <div>
            {
                /**
                 * @Possible_Enhance
                 * It can use a new component called <DotsCarril />
                 * in order to group the _.map()_ method
                 */
                aptness.map((element, index)=>{
                    return (
                        (level-1 >= index) ?
                            React.createElement(
                                'img',
                                {
                                    'src':'../statics/blue-dark-dot.svg',
                                    'width': '12',
                                    'height': '12'
                                }
                                ,
                                null
                            )
                        :
                            React.createElement(
                                'img',
                                {
                                    'src':'../statics/gray-dot.svg',
                                    'width': '12',
                                    'height': '12'
                                }
                                ,
                                null
                            )
                    )
                })
            }
            <p>{aptness[level-1]}</p>
        </div>
    )
}

export default LevelProgressGenerator;
