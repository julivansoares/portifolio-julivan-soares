"use client";
import style from "./style.module.scss"
import 'animate.css';
import { useState } from "react";

import {AiOutlineMenu} from 'react-icons/ai';



export default  function Nav(){
   const [menumobile, setmenuMobile] = useState(false);

    
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <h1 className={`${style.nome} animate__animated  animate__pulse` }  > Julivan Soares</h1>
          <span onClick={()=>setmenuMobile(!menumobile)}>
          {menumobile ?  <h1>x</h1>: <AiOutlineMenu />}
           </span>
          <ul className={`${menumobile ? style.open : style.close} animate__animated  animate__bounceInDown`}>
            <li className="animate__animated  animate__pulse">
              <a href="#home" >Home</a>
        
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#resume">Resumo</a>
            </li>
            <li>
              <a href="#portifolio">Portifolio </a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul> 
          
        </nav>
        
      </header>

      
    );
}


