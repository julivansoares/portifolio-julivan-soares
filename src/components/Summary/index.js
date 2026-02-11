"use client"
import { useEffect, useState } from 'react'
import style from './style.module.scss'
import './style.css'

export default function Summary() {
  // ====== DADOS ESTRUTURADOS ======
  // Array com todas as experiências profissionais
  const experiencias = [
    {
      id: 0,
      periodo: "2021 - Atual",
      empresa: "Nome da Empresa",
      titulo: "Atendimento de suporte de Nível 1",
      descricao: "Registro, direcionamento e solução nos chamados técnicos da fila por meio do sistema de gestão de chamados execução nos atendimentos técnicos por acesso remoto, criação e apoio na atualização de base de conhecimentos técnicos e/ou atendimento da demanda"
    },
    {
      id: 1,
      periodo: "2020 - 2021",
      empresa: "Nome da Empresa",
      titulo: "Técnico de Informática",
      descricao: "Realização de atendimento aos colaboradores dentro da sua área de atuação. Realização de manutenção corretiva e preventiva de computadores, impressoras e rede da instituição. Responsável pelo cuidado e manutenção dos laboratórios de informática que são disponibilizados para acesso dos alunos."
    },
    {
      id: 2,
      periodo: "2019 - 2020",
      empresa: "Nome da Empresa",
      titulo: "Desenvolvedor Web Junior",
      descricao: "Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript. Colaboração com equipa na criação de interfaces responsivas e implementação de funcionalidades interativas. Suporte técnico e manutenção de sistemas existentes."
    },
    {
      id: 3,
      periodo: "2018 - 2019",
      empresa: "Nome da Empresa",
      titulo: "Estagiário de TI",
      descricao: "Auxílio na manutenção de servidores e redes. Suporte técnico básico a usuários. Documentação de processos e procedimentos. Aprendizado prático de infraestrutura de TI e boas práticas."
    }
  ];

  // Array com todas as graduações e cursos
  const educacoes = [
    {
      id: 0,
      periodo: "2017 - 2019",
      titulo: "Tecnólogo em Análise e desenvolvimento de sistemas",
      instituicao: "Centro Universitário Jorge Amado"
    },
    {
      id: 1,
      periodo: "2022 - 2022",
      titulo: "Curso Intensivo de Desenvolvimento de Software - Fullstack",
      instituicao: "Cubos Academy"
    }
  ];

  // ====== ESTADOS DE CONTROLE ======
  // Índice para rastrear qual experiência está sendo exibida
  const [indiceExperiencia, setIndiceExperiencia] = useState(0);
  // Índice para rastrear qual educação está sendo exibida
  const [indiceEducacao, setIndiceEducacao] = useState(0);

  useEffect(() => {
    // ====== GERENCIADOR DE EVENTOS ======
    // Esta função inicializa todos os event listeners e lógica de navegação
    const inicializarNavegacao = () => {
      // Seleciona todos os indicadores (botões) de experiência
      const botoesExperiencia = document.querySelectorAll("#conteudo_experiencia ul li");
      // Seleciona todos os indicadores (botões) de educação
      const botoesEducacao = document.querySelectorAll("#conteudo_educacao ul li");

      // Adiciona listeners a cada botão de experiência
      botoesExperiencia.forEach((botao, index) => {
        // Remove listeners anteriores para evitar duplicação
        botao.onclick = null;
        // Adiciona novo listener para navegar para esta experiência
        botao.addEventListener("click", () => {
          setIndiceExperiencia(index);
        });
      });

      // Adiciona listeners a cada botão de educação
      botoesEducacao.forEach((botao, index) => {
        // Remove listeners anteriores para evitar duplicação
        botao.onclick = null;
        // Adiciona novo listener para navegar para esta educação
        botao.addEventListener("click", () => {
          setIndiceEducacao(index);
        });
      });
    };

    // Executa a inicialização após a renderização
    inicializarNavegacao();
  }, [indiceExperiencia, indiceEducacao])
  return (
    <div className={style.resumo} id="resume">
      {/* Header da seção de Resumo */}
      <div className={style.resumo_secundario}>
        <h1>Resumo</h1>
        <p>Perfil Profissional - Tudo sobre mim</p>

        <div aria-label="Ilustração de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={style.sub_resumo}>
        {/* ====== SEÇÃO EXPERIÊNCIA ====== */}
        <h2 className={style.experiencia}>
          <i className="fa-solid fa-handshake"></i> EXPERIÊNCIA
        </h2>

        {/* Container de conteúdo dinâmico de Experiência */}
        <div className="conteudo-experiencia" id='conteudo_experiencia'>
          {/* Renderiza dinamicamente cada experiência do array */}
          {experiencias.map((exp, index) => (
            <div key={exp.id} className={index === indiceExperiencia ? "ativo" : ""}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <strong style={{ color: '#00EEFF', fontSize: '0.9rem' }}>{exp.empresa}</strong>
                <span style={{ margin: 0, fontSize: '0.9rem' }}>{exp.periodo}</span>
              </div>
              <h3 style={{ marginTop: '0', marginBottom: '15px' }}>{exp.titulo}</h3>
              <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{exp.descricao}</p>
            </div>
          ))}

          {/* Indicadores (botões) para navegar entre experiências */}
          <ul>
            {experiencias.map((_, index) => (
              <li key={index} className={index === indiceExperiencia ? "ativo" : ""}>
                <i className="fa-sharp fa-solid fa-circle"></i>
              </li>
            ))}
          </ul>
        </div>

        {/* ====== SEÇÃO EDUCAÇÃO ====== */}
        <h2 className={style.educacao}>
          <i className="fa-solid fa-book"></i> Educação
        </h2>

        {/* Container de conteúdo dinâmico de Educação */}
        <div className="conteudo-educacao" id='conteudo_educacao'>
          {/* Renderiza dinamicamente cada educação do array */}
          {educacoes.map((edu, index) => (
            <div key={edu.id} className={index === indiceEducacao ? "ativo" : ""}>
              <span style={{ marginBottom: '20px' }}>{edu.periodo}</span>
              <h3 style={{ marginTop: '0', marginBottom: '15px' }}>{edu.titulo}</h3>
              <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{edu.instituicao}</p>
            </div>
          ))}

          {/* Indicadores (botões) para navegar entre educações */}
          <ul>
            {educacoes.map((_, index) => (
              <li key={index} className={index === indiceEducacao ? "ativo" : ""}>
                <i className="fa-sharp fa-solid fa-circle"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}



