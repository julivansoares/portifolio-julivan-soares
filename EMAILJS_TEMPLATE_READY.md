# Template pronto para EmailJS

Use este conteúdo no painel do EmailJS ao criar um novo template. Defina o Template ID e copie para `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.

Template name: `site_contact_template`

Template (text):

Assunto: {{assunto}}

Você recebeu uma nova mensagem pelo formulário do site:

Nome: {{nome}}
E-mail: {{email}}

Mensagem:
{{mensagem}}

---

Template (HTML):

<div style="font-family: Arial, sans-serif; color: #222;">
  <h2 style="color:#00EEFF;">Nova mensagem do site</h2>
  <p><strong>Nome:</strong> {{nome}}</p>
  <p><strong>E-mail:</strong> {{email}}</p>
  <p><strong>Assunto:</strong> {{assunto}}</p>
  <hr />
  <p>{{mensagem}}</p>
</div>

Variáveis (garanta que estes nomes existam no template):
- `nome`
- `email`
- `assunto`
- `mensagem`

Exemplo de mapeamento no EmailJS (opcional):
- from_name: {{nome}}
- reply_to: {{email}}
- message: {{mensagem}}

Observações:
- Depois de criar o template, copie o `template_id` para `.env.local` como `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.
- Use o `service_id` e `public_key` correspondentes também nas variáveis de ambiente.
