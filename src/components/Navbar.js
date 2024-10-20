import React from "react"
import {AppBar, Toolbar, Button, Stack} from "@mui/material"
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <AppBar style = {{background: "transparent", position: "sticky"}}>
            <Toolbar>
                <Stack direction = 'row' spacing = {6}>
                    <Link to="/">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 18}}>Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 18}}>About</Button>
                    </Link>
                    <Link to="/skills">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 18}}>Skills</Button>
                    </Link>
                    <Link to="/contact">
                        <Button style = {{color:"white", fontFamily:"Poppins", fontSize: 18}}>Contact</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}