// @react/server
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import style from './style.module.scss'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/skills'
import Summary from '@/components/Summary'
import Contact from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'






export default function Page() {
  return (
    <>
    
       <Nav/>
       
      <video autoPlay loop muted  className={style.video}>
        <source src="https://f004.backblazeb2.com/file/portfolio-julivan/video.mp4" type="video/mp4" />
      </video>       
    
      <Home/>
      
      <AboutMe/>
       
      <Skills/>

      <Summary/> 
      <Contact/>
      <ScrollReveal />
      <footer className={style.footer}>
        <div className={style.footerContent}>
          <p>© {new Date().getFullYear()} Julivan Soares. Todos os direitos reservados.</p>
          <p>Desenvolvido com React, Next.js e paixão por tecnologia.</p>
        </div>
      </footer>
    </>
  )
}
