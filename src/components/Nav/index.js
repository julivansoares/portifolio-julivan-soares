"use client";
import style from "./style.module.scss"
import 'animate.css';
import { useState } from "react";

import {AiOutlineMenu} from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';



export default  function Nav(){
   const [menumobile, setmenuMobile] = useState(false);

    
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <h1 className={`${style.nome} animate__animated  animate__pulse` }  > Julivan Soares</h1>
          <div className={style.socials}>
            <a href="https://github.com/julivansoares" target="_blank" rel="noreferrer" aria-label="GitHub">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/julivan-soares/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BsLinkedin />
            </a>
            <a className={style.download} href="/JULIVAN_SOARES.pdf" download aria-label="Baixar currículo">Download</a>
          </div>
          <span onClick={()=>setmenuMobile(!menumobile)}>
          {menumobile ?  <h1>x</h1>: <AiOutlineMenu />}
           </span>
          <ul className={`${menumobile ? style.open : style.close} animate__animated  animate__bounceInDown`}>
            <li className="animate__animated  animate__pulse">
              <a href="#home" >Início</a>
        
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#resume">Resumo</a>
            </li>
            <li>
              <a href="#skills">Tecnologias</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul> 
          
        </nav>
        
      </header>

      
    );
}


