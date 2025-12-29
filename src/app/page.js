// @react/server
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import style from './style.module.scss'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/skills'
import Summary from '@/components/Summary'






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
       
    </>
    
    
  )
}
