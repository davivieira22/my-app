import React from "react";
import {Botao} from './style'

const Button = ({children,...props} )=>{
   
    return <Botao {...props}>{children}</Botao>



}




export default Button;
