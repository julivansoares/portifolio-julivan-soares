
import style from './style.module.scss'
import Image from "next/image";


export default function Skills() {

    return (

        <main id="skills" className={`${style.servicos} reveal`} >
            <div className={style.titulo_secundario}>
                <h1>Tecnologias</h1>
                <p>Perfil Profissional - Tudo sobre mim</p>

                <div aria-label="Ilustração de botões">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={style.sub_resumo}>

                </div>
            </div>

            <div className={style.menu_servicos}>
                <ul aria-label="Navegação secundaria">

                    <li>
                        <Image src="/img/javascript.png" alt="Javascript" width={64} height={64} />
                            <h3>Javascript</h3>
                    </li>
                    <li>
                        <Image src="/img/python.png" alt="Python" width={64} height={64} />
                        <h3>Python</h3>
                    </li>
                    <li>
                        <Image src="/img/nodejs.png" alt="NodeJS" width={64} height={64} />
                        <h3>NodeJS</h3>
                    </li>


                    <li>
                        <Image src="/img/React.png" alt="React" width={64} height={64} />
                            <h3>React</h3>
                    </li>
                    <li>
                        <Image src="/img/html5.png" alt="Html5" width={64} height={64} />
                            <h3>Html5</h3>
                    </li>
                    <li>
                        <Image src="/img/css3.png" alt="Css3" width={64} height={64} />
                            <h3>Css3</h3>
                    </li>


                    <li>
                        
                        <Image src="/img/postgres.png" alt="Postgresql" width={64} height={64} />
                            <h3>Postgresql</h3>
                    </li>

                    <li>
                        <Image src="/img/mysql.png" alt="Mysql" width={64} height={64} />
                            <h3>Mysql</h3>
                    </li>

                    <li>
                        <Image src="/img/sql-server.png" alt="Sqlserver" width={64} height={64} />
                            <h3>Sqlserver</h3>
                    </li>

                    <li> <Image src="/img/linux.png" alt="Linux" width={64} height={64} /> <h3>Linux</h3></li>

                    <li>

                        <Image src="/img/github1.png" alt="Github" width={64} height={64} />
                        <h3>Github</h3>
                    </li>
                </ul>
            </div>
        </main>

    )
}