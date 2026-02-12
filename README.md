# Portfolio_Final

## EmailJS (env e template)

1. Instale a dependência (localmente):

```bash
npm install @emailjs/browser
```

2. Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.local.example .env.local
# editar .env.local com seus valores
```

As variáveis necessárias em `.env.local`:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — seu service id
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — seu template id
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — public key

3. Template sugerido (use estas variáveis no painel do EmailJS):

Exemplo de corpo (texto):

```
Assunto: {{assunto}}

Nome: {{nome}}
E-mail: {{email}}

Mensagem:
{{mensagem}}
```

Ou em HTML (no painel do EmailJS):

```html
<h2>Nova mensagem do site</h2>
<p><strong>Nome:</strong> {{nome}}</p>
<p><strong>E-mail:</strong> {{email}}</p>
<p><strong>Assunto:</strong> {{assunto}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{mensagem}}</p>
```

4. Reinicie o servidor e teste o formulário em `http://localhost:3001` (ou porta mostrada).

Se quiser, eu posso criar o template para você — me diga os valores que deseja usar no corpo do e-mail.