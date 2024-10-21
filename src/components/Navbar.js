import React from "react"
import {AppBar, Toolbar, Button, Stack} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <AppBar style = {{background: "transparent", position: "sticky"}}>
            <Toolbar>
                <Stack direction = 'row' spacing = {20}>
                    <Link to="/">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 20}}>Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 20}}>About</Button>
                    </Link>
                    <Link to="/skills">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 20}}>Skills</Button>
                    </Link>
                    <a href="Priyanka_Rao_RES.pdf" download="Priyanka Rao's Resume">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 20}}>Resume</Button>
                    </a>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}