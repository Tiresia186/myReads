import React from "react";
import Aux from "./Aux";
import styles from './css/main.module.css';
import Search from './Search';


const Header=(props)=>{


    return( 
        <Aux>
            <header >
                
                <Search/>
               
            </header>
        </Aux>

    )
}

export default Header;