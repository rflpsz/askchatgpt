# OpenAI Chat API Script Serverless

Este é um script em Node.js (por meio de function do Netlify) que utiliza a API do OpenAI para realizar conversas de chat com modelos de linguagem. Ele permite fazer perguntas e obter respostas geradas pelo modelo da OpenAI.

## Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Chave de API do OpenAI. Você pode obter a chave de API registrando-se na plataforma OpenAI. [Clique aqui](https://platform.openai.com/account/billing/overview) para acessar a página de registro.
- Conta na Netlify [Clique aqui](https://app.netlify.com/signup) para abrir uma conta totalmente gratuita.

## Configuração

1. Clone este repositório para o seu ambiente local:

git clone https://github.com/rflpsz/asktogpt.git

2. Navegue até o diretório clonado:

cd asktogpt

3. Instale as dependências do projeto:

npm install

4. Certifique-se de ter uma conta na Netlify e de ter criado um site. Se você precisar criar um novo site via linha de comando, instale o netlify-cli globalmente:

npm install netlify-cli

5. Inicialize o Netlify:

netlify init

Após a inicialização, você verá uma nova pasta chamada .netlify com um arquivo `state.json` com o seu `siteId` configurado.

## Uso

1. Para utilizar, execute o seguinte comando:

netlify dev

2. Se tudo ocorrer bem, você receberá a seguinte mensagem:

Server now ready on http://localhost:8888

Agora, basta abrir o Postman e fazer uma requisição, por exemplo:

http://localhost:8888/.netlify/functions/askgpt?prompt=Retorne os 10 primeiros números da sequência de Fibonacci&max_tokens=100&temperature=0.7&role_system=você é um especialista em matemática&apikey=YOUR_API_KEY&model=gpt-3.5-turbo

## Demo

1. Eu disponibilizei um serviço como esse pronto, funcionando, basta fazer o request abaixo:

https://askforchatgpt.netlify.app/.netlify/functions/askgpt?prompt=SUA_PERGUNTA&max_tokens=100&temperature=0.7&role_system=SUA_ROLE_SYSTEM&apikey=YOUR_API_KEY&model=gpt-3.5-turbo

## Dúvidas

Para dúvidas e suporte, entre em contato pelo email rflpsz@gmail.com.

## Doações

Se você deseja fazer uma doação de qualquer valor para incentivar a criação de conteúdos como este, utilize o PIX com o email: contato@rafasouza.dev

Espero ter ajudado! Abraços.