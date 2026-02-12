"use client"
import { useState, useRef, useEffect } from 'react'
import style from './style.module.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { init, sendForm } from '@emailjs/browser'

export default function Contact(){
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    if(publicKey) init(publicKey)
  }, [])

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    if(!serviceId || !templateId){
      setStatus('Configurar EmailJS: faltando SERVICE_ID ou TEMPLATE_ID')
      return
    }

    try{
      setSending(true)
      await sendForm(serviceId, templateId, formRef.current)
      setStatus('Mensagem enviada com sucesso!')
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
    }catch(err){
      console.error('EmailJS error', err)
      setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.')
    }finally{
      setSending(false)
      setTimeout(()=>setStatus(''), 4000)
    }
  }

  return (
    <section className={style.contato} id="contact">
      <div className={style.contato_secundario}>
        <h1>Contatos</h1>
        <p>Entre em contato — informações e formulário</p>
      </div>

      <div className={style.sub_contato}>
        <div className={style.contato_info}>
          <div className={style.item}><FiPhone /> <span>+55 (71) 9XXXX-XXXX</span></div>
          <div className={style.item}><AiOutlineMail /> <span>julivan.soares@outlook.com</span></div>
          <div className={style.item}><BsLinkedin /> <span>linkedin.com/in/julivan-soares</span></div>
          <div className={style.item}><BsGithub /> <span>github.com/julivansoares</span></div>
        </div>

        <form ref={formRef} className={style.contato_form} onSubmit={handleSubmit} aria-label="Formulário de contato">
          <div className={style.row}>
            <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
            <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
          </div>
          <input name="assunto" placeholder="Assunto" value={form.assunto} onChange={handleChange} />
          <textarea name="mensagem" placeholder="Mensagem" value={form.mensagem} onChange={handleChange} required />
          <div className={style.actions}>
            <button type="submit" disabled={sending}>{sending ? 'Enviando...' : 'Enviar'}</button>
            <span className={style.status}>{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
