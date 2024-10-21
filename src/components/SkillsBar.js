import React from 'react';
import SkillBar from 'react-skillbars';
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function SkillsBar() {

    const {theme} = useContext(ThemeContext);
    console.log(theme);

    const programmingLanguages = [
        { type: 'Java', level: 75 },
        { type: 'Python', level: 80 },
        { type: 'C++', level: 60 },
        { type: 'HTML', level: 90 },
        { type: 'CSS', level: 90 },
        { type: 'JavaScript', level: 70 },
        { type: 'SQL', level: 80 },
        { type: 'Ruby', level: 45 },
    ];

    const colors = {
        bar: theme === 'light' ? 'salmon' : '#000080',
        title: {
          text: "white",
          background: theme === 'light' ? '#e9967a' : '#191970'
        }
    };

    return(
        <div style = {{padding: "10px"}}>
            <h1 style = {{textAlign: "center"}}>Programming Languages</h1>
            <div style = {{color: "white"}}>
                <SkillBar key={theme} skills={programmingLanguages} animationDelay={0} animationDuration={3000} colors={colors}/>
            </div>
        </div>
    );
}