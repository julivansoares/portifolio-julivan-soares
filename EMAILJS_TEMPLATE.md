# Exemplo de Template para EmailJS

Crie um template no painel do EmailJS e use os campos abaixo como variáveis.

Variáveis disponíveis (envie esses campos no formulário):

- `nome` — nome do remetente
- `email` — e-mail do remetente
- `assunto` — assunto da mensagem
- `mensagem` — corpo da mensagem

Exemplo de Template (texto):

Assunto: {{assunto}}

Nova mensagem enviada pelo formulário do site:

Nome: {{nome}}
E-mail: {{email}}

Mensagem:
{{mensagem}}

Exemplo de Template (HTML):

<h2>Nova mensagem do site</h2>
<p><strong>Nome:</strong> {{nome}}</p>
<p><strong>E-mail:</strong> {{email}}</p>
<p><strong>Assunto:</strong> {{assunto}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{mensagem}}</p>

Observações:
- Garanta que o `template` esteja configurado para receber essas variáveis.
- Use o `service_id`, `template_id` e `public_key` que você copiará para `.env.local`.
