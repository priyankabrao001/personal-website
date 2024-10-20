import { alignProperty } from '@mui/material/styles/cssUtils';
import Typewriter from 'typewriter-effect';

export default function Home(){
    return (
        <div style = {{color: "white", fontFamily: "Poppins", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', fontSize: 100}}>
            <Typewriter
                 onInit={(typewriter) => {
                     typewriter.typeString('Priyanka Rao')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(2000)
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                .start();
            }}
        />
    </div>
    )
}