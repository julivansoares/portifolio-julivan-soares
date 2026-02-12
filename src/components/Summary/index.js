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
      periodo: "2024 - Atual",
      empresa: "Tribunal Regional Eleitoral da Bahia (Interop)",
      titulo: "Técnico de Suporte N2",
      descricao: "Diagnóstico e resolução de incidentes de hardware, sistemas operacionais e redes; configuração, administração e monitoramento de ambientes de rede complexos; análise de logs e eventos para identificação e prevenção de falhas; utilização de ferramentas avançadas de monitoramento de sistemas e redes; documentação de soluções visando padronização e agilidade em atendimentos futuros; escalonamento de incidentes críticos para o suporte de nível 3."
    },
    {
      id: 1,
      periodo: "2021 - 2024",
      empresa: "Solutis",
      titulo: "Analista de Suporte ao Cliente II",
      descricao: "Diagnóstico e resolução de problemas de hardware, sistemas operacionais e redes; configuração, gerenciamento e monitoramento de ambientes de rede complexos; análise de logs e eventos do sistema para identificação de falhas; utilização de ferramentas avançadas de monitoramento de sistemas e redes; documentação de soluções visando padronização e agilidade em demandas futuras; escalonamento de incidentes críticos para o suporte de nível 3; monitoramento de conexões com gerenciamento de falhas de rede, controle de carga, status de difusão e atuação como proxy de rede; manutenção e suporte a periféricos como leitores de código de barras, impressoras térmicas, PIN pads e gavetas de dinheiro."
    },
    {
      id: 2,
      periodo: "2020 - 2021",
      empresa: "Senai Cimatec",
      titulo: "técnico de Informática (PJ)",
      descricao: "Suporte técnico em geral, configuração e instalação de redes, manutenção de microcomputadores e atendimento help desk."
    },
    {
      id: 3,
      periodo: "2019 - 2020",
      empresa: "Fundação Bahiana de Cardiologia",
      titulo: "Estagiário de TI",
      descricao: "Suporte técnico com manutenção de desktops e notebooks, atendimento a usuários de primeiro nível e resolução de incidentes na rede corporativa; configuração e instalação do sistema SMART; manutenção de microcomputadores."
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
      periodo: "2025 - 2026",
      titulo: " Pós-graduação segurança da informação",
      instituicao: "Unifacs"
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



