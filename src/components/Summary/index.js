"use client"
import { useEffect } from 'react'
import style from './style.module.scss'
import './style.css'



export default function Summary() {
  useEffect(() => {

    function sobreMim() {
      const divExperiencia = document.querySelectorAll("#conteudo_experiencia div");
      const liExperiencia = document.querySelectorAll("#conteudo_experiencia ul li");
      const divEducacao = document.querySelectorAll("#conteudo_educacao div");
      const liEducacao = document.querySelectorAll("#conteudo_educacao ul li");
      console.log(divExperiencia, liExperiencia);

      divEducacao[0].classList.add('ativo');
      liEducacao[0].classList.add('ativo');
      divExperiencia[0].classList.add('ativo');
      liExperiencia[0].classList.add('ativo');
    
    
      function slideShowExperiencia(index) {
        divExperiencia.forEach((div) => {
          div.classList.remove("ativo");
        });
        liExperiencia.forEach((botao) => {
          botao.classList.remove("ativo");
        });
        console.log(index)
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
        console.log(divExperiencia, liExperiencia);
      }
    
      function slideShowEducacao(index) {
        divEducacao.forEach((div) => {
          div.classList.remove("ativo");
        });
        liEducacao.forEach((botao) => {
          botao.classList.remove("ativo");
        });
       
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
      }
    
    
      liExperiencia.forEach((event, index) => {
        event.addEventListener("click", () => {
          slideShowExperiencia(index);
        });
      });
    
      liEducacao.forEach((event, index) => {
        event.addEventListener("click", () => {
          slideShowEducacao(index);
       
        });
      });
      
    }
    sobreMim()

  }, [])
  return (

    <div className={style.resumo} id="resume">

      <div className={style.resumo_secundario}>
        <h1>Resumo</h1>
        <p>Perfil Profissional - Tudo sobre mim</p>

        <div aria-label="Ilustração de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class={style.sub_resumo}>
        <h2 className={style.experiencia}> <i className="fa-solid fa-handshake"></i> EXPERIÊNCIA</h2>
{/* 
        <div className={style.conteudo_experiencia} id='conteudo_experiencia'>

          <div>
            <span>2021 - Atual</span>
            <h3>Atendimento de suporte de Nível 1 </h3>
            <p>Registro, direcionamento e solução nos chamados
              técnicos da fila por meio do sistema de gestão de
              chamados
              execução nos atendimentos técnicos por acesso
              remoto, criação e apoio na atualização de base de
              conhecimentos técnicos e/ou atendimento da
              demanda
            </p>
          </div>
          <div>
            <span>2020-2021</span>

            <h3>Técnico de Informática</h3>

            <p>Realização de atendimento aos colaboradores dentro da
              sua área de atuação.
              Realização de manutenção corretiva e preventiva de
              computadores, impressoras e rede da instituição.
              Responsável pelo cuidado e manutenção dos
              laboratórios de informática que são disponibilizados para
              acesso dos alunos.
            </p>
          </div>
          <ul>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
          </ul>
        </div> */}
        
        <div className="conteudo-experiencia" id='conteudo_experiencia'>

          <div>
            <span>2021 - Atual</span>
            <h3>Atendimento de suporte de Nível 1 </h3>
            <p>Registro, direcionamento e solução nos chamados
              técnicos da fila por meio do sistema de gestão de
              chamados
              execução nos atendimentos técnicos por acesso
              remoto, criação e apoio na atualização de base de
              conhecimentos técnicos e/ou atendimento da
              demanda
            </p>
          </div>
          <div>
            <span>2020-2021</span>

            <h3>Técnico de Informática</h3>

            <p>Realização de atendimento aos colaboradores dentro da
              sua área de atuação.
              Realização de manutenção corretiva e preventiva de
              computadores, impressoras e rede da instituição.
              Responsável pelo cuidado e manutenção dos
              laboratórios de informática que são disponibilizados para
              acesso dos alunos.
            </p>
          </div>
          <ul>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
          </ul>
        </div>
        <h2 className={style.educacao}><i className="fa-solid fa-book"></i> Educação</h2>
       {/*  <div className={style.conteudo_educacao} id='conteudo_educacao'>
          <div>
            <span>2017 - 2019</span>
            <h3>Tecnólogo em Análise e desenvolvimento de sistemas</h3>
            <p>Centro Universitário Jorge Amado</p>
          </div>
          <div>
            <span>2022 - 2022</span>
            <h3>Curso Intensivo de Desenvolvimento de Software - Fullstack</h3>
            <p>Cubos Academy</p>
          </div>
          <ul>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
            <li><i className="fa-sharp fa-solid fa-circle"></i></li>
          </ul>
        </div> */}
          <div className="conteudo-educacao" id='conteudo_educacao'>
        <div>
          <span>2017 - 2019</span>
          <h3>Tecnólogo em Análise e desenvolvimento de sistemas</h3>
          <p>Centro Universitário Jorge Amado</p>
        </div>
        <div>
          <span>2022 - 2022</span>
          <h3>Curso Intensivo de Desenvolvimento de Software - Fullstack</h3>
          <p>Cubos Academy</p>
        </div>
        <ul>
          <li><i className="fa-sharp fa-solid fa-circle"></i></li>
          <li><i className="fa-sharp fa-solid fa-circle"></i></li>
        </ul>
      </div>
      </div>

    </div>

  )
}



