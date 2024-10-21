import { alignProperty } from '@mui/material/styles/cssUtils';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function Home(){
    
    return (
        <div style = {{color: "white", fontFamily: "Poppins", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', fontSize: 75, float: "center"}}>
            <Typewriter
                options={{
                  strings: ['Priyanka Rao', 'Aspiring full-stack developer'],
                  autoStart: true,
                  loop: true,
                }}
            />
        </div>
    )
}