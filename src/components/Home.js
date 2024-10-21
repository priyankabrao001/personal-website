import { alignProperty } from '@mui/material/styles/cssUtils';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function Home(){
    
    const {theme} = useContext(ThemeContext);

    return (
        <div style = {{color: "white", fontFamily: "Poppins", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', fontSize: 75, float: "center"}}>
            <Typewriter
                key = {theme}
                options={{
                  strings: ['Priyanka Rao', 'Aspiring full-stack developer'],
                  autoStart: true,
                  loop: true,
                }}
            />
        </div>
    )
}